import os
import re
import json
from flask import Flask, send_from_directory, request, jsonify

app = Flask(__name__, static_folder="landing", static_url_path="/")

EMAIL_REGEX = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")

def try_forward(payload: dict) -> tuple[bool, str]:
    """Forward contact via SMTP or Telegram depending on env vars. Returns (ok, message)."""
    # Try SMTP first if configured
    smtp_host = os.getenv("SMTP_HOST")
    smtp_user = os.getenv("SMTP_USER")
    smtp_pass = os.getenv("SMTP_PASS")
    smtp_to = os.getenv("SMTP_TO")
    if smtp_host and smtp_user and smtp_pass and smtp_to:
        try:
            import smtplib
            from email.mime.text import MIMEText
            from email.utils import formatdate

            body = (
                f"Nuevo mensaje de contacto (lang: {payload.get('locale','-')})\n\n"
                f"Nombre: {payload.get('name','-')}\n"
                f"Email: {payload.get('email','-')}\n"
                f"Empresa: {payload.get('company','-')}\n"
                f"Servicio: {payload.get('service','-')}\n\n"
                f"Mensaje:\n{payload.get('message','-')}\n"
            )
            msg = MIMEText(body, _charset="utf-8")
            msg["Subject"] = "Contacto — Landing"
            msg["From"] = smtp_user
            msg["To"] = smtp_to
            msg["Date"] = formatdate(localtime=True)

            with smtplib.SMTP_SSL(smtp_host, int(os.getenv("SMTP_PORT", "465"))) as server:
                server.login(smtp_user, smtp_pass)
                server.sendmail(smtp_user, [smtp_to], msg.as_string())
            return True, "Sent via SMTP"
        except Exception as e:
            return False, f"SMTP error: {e}"

    # Fallback to Telegram if configured
    tg_token = os.getenv("TELEGRAM_TOKEN")
    tg_chat = os.getenv("TELEGRAM_CHAT_ID")
    if tg_token and tg_chat:
        try:
            import requests
            text = (
                f"📩 Nuevo contacto (lang: {payload.get('locale','-')})\n"
                f"👤 {payload.get('name','-')} — {payload.get('email','-')}\n"
                f"🏢 {payload.get('company','-')}\n"
                f"🧩 Servicio: {payload.get('service','-')}\n\n"
                f"✍️ {payload.get('message','-')}"
            )
            url = f"https://api.telegram.org/bot{tg_token}/sendMessage"
            res = requests.post(url, json={"chat_id": tg_chat, "text": text})
            if res.status_code == 200:
                return True, "Sent via Telegram"
            return False, f"Telegram error: status={res.status_code}"
        except Exception as e:
            return False, f"Telegram error: {e}"

    # If nothing configured, just log
    print("[contact] Received (not forwarded):", json.dumps(payload))
    return True, "Logged only"

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/en")
def index_en():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/api/contact", methods=["POST"])
def contact():
    try:
        data = request.get_json(force=True, silent=False)
    except Exception:
        return jsonify({"error": "Invalid JSON"}), 400

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    message = (data.get("message") or "").strip()

    if not name or not EMAIL_REGEX.match(email) or not message:
        return jsonify({"error": "Invalid fields"}), 400

    ok, info = try_forward(data)
    status = 200 if ok else 502
    return jsonify({"ok": ok, "info": info}), status

# Static file routes (CSS/JS)
@app.route('/assets/<path:filename>')
def assets(filename: str):
    return send_from_directory(os.path.join(app.static_folder, 'assets'), filename)

if __name__ == "__main__":
    port = int(os.getenv("PORT", "8000"))
    app.run(host="0.0.0.0", port=port, debug=True)