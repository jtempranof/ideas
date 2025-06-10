import requests
import datetime

# Configuración del bot
TELEGRAM_TOKEN = "7601389177:AAE40TD_5FM4V7Q359B_egRjTbzyiAAft2o"
TELEGRAM_CHAT_ID = "994310049"
SUBREDDITS = ["AppIdeas", "SomebodyMakeThis"]
HEADERS = {"User-Agent": "DailyRedditIdeasBot/0.1"}

def fetch_top_posts(subreddit, limit=5):
    url = f"https://www.reddit.com/r/{subreddit}/top/.json?t=day&limit={limit}"
    response = requests.get(url, headers=HEADERS)
    if response.status_code != 200:
        return [f"Error fetching from r/{subreddit} (status {response.status_code})"]
    data = response.json()
    posts = data.get("data", {}).get("children", [])
    ideas = []
    for post in posts:
        title = post["data"].get("title", "No title")
        url = "https://reddit.com" + post["data"].get("permalink", "")
        ideas.append(f"• {title}\n{url}")
    return ideas

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
    message = build_daily_message()
    success = send_telegram_message(message)
    if success:
        print("Mensaje enviado correctamente.")
