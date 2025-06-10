import requests
import datetime
import feedparser

# Configuración del bot
TELEGRAM_TOKEN = "7601389177:AAE40TD_5FM4V7Q359B_egRjTbzyiAAft2o"
TELEGRAM_CHAT_ID = "994310049"
SUBREDDITS = ["AppIdeas", "SomebodyMakeThis"]
HEADERS = {"User-Agent": "DailyRedditIdeasBot/0.1"}

def fetch_top_posts(subreddit, limit=5):
    url = f"https://www.reddit.com/r/{subreddit}/top/.rss?t=day"
    headers = {
        'User-Agent': 'Mozilla/5.0 (compatible; MyRedditBot/1.0; +https://example.com/bot)'
    }
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        return [f"Error fetching from r/{subreddit} (status {response.status_code})"]
    feed = feedparser.parse(response.content)
    ideas = []
    for entry in feed.entries[:limit]:
        title = entry.title
        link = entry.link
        ideas.append(f"• {title}\n{link}")
    return ideas if ideas else [f"No posts found in r/{subreddit}."]

def build_daily_message():
    today = datetime.datetime.now().strftime("%Y-%m-%d")
    message = f"💡 *Top 5 Business Ideas for {today}*\n"
    for subreddit in SUBREDDITS:
        message += f"\n*From r/{subreddit}:*\n"
        ideas = fetch_top_posts(subreddit)
        message += "\n".join(ideas) + "\n"
    return message

def send_telegram_message(text):
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": text,
        "parse_mode": "Markdown"
    }
    response = requests.post(url, json=payload)
    print(f"Telegram API responded with status code: {response.status_code}")
    print(f"Response content: {response.text}")
    return response.status_code == 200

def main():
    print("⏱ Ejecutando bot diario...")
    message = build_daily_message()
    print("📨 Mensaje generado:")
    print(message)
    success = send_telegram_message(message)
    if success:
        print("✅ Mensaje enviado correctamente.")
    else:
        print("❌ Error enviando mensaje.")
        
if __name__ == "__main__":
    print("🔁 Llamando a main()")
    main()