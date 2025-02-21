const integrationSpecSettings = {
  "data": {
    "date": {
      "created_at": "2025-02-19",
      "updated_at": "2025-02-19"
    },
    "descriptions": {
      "app_description": "Birthday Reminder notifies your team about upcoming birthdays every morning.",
      "app_logo": "https://img.freepik.com/free-psd/yellow-gift-with-golden-ribbon-icon-sign-symbol-3d-background-illustration_56104-2422.jpg",
      "app_name": "Birthday Reminder",
      "app_url": "https://telex-birthday-reminder.vercel.app",
      "background_color": "#fff"
    },
    "integration_category": "Monitoring & Logging",
    "integration_type": "interval",
    "target_url": "",
    "is_active": true,
    "author": "Benson Christopher Emuzo",
    "output": [
      {
        "label": "bensonate-channel-0",
        "value": true
      }
    ],
    "key_features": [
      "Birthday messages for team members",
      "Customizable birthday messages.",
      "Keeps team engagement high."
    ],
    "settings": [
      {
        "label": "interval",
        "type": "text",
        "default": "*/5 * * * *	",
        "required": true
      }
    ],
    "tick_url": "https://telex-birthday-reminder.vercel.app/check-birthdays"
  }
}

export default integrationSpecSettings;