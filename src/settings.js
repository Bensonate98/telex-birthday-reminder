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
    "output": [
      {
        "label": "bensonate-channel-0",
        "value": true
      }
    ],
    "key_features": [
      "Daily birthday reminders at a set time.",
      "Customizable messages.",
      "Keeps team engagement high."
    ],
    "permissions": {
      "monitoring_user": {
        "always_online": true,
        "display_name": "Birthday Bot"
      }
    },
    "settings": [
      {
        "label": "interval",
        "type": "text",
        "required": true,
        "default": "* * * * *",
        "required": true
      },
      // {
      //   "label": "Birthday list",
      //   "type": "text",
      //   "description": "Enter the API URL or database endpoint where birthdays are stored.",
      //   "default": "//////",
      //   "required": true
      // },
      // {
      //   "label": "Message Message",
      //   "description": "Custom message format (use {name} for dynamic names).",
      //   "required": true,
      //   "default": "🎉 Happy Birthday, {name}! 🎂"
      // }
    ],
    "tick_url": "https://telex-birthday-reminder.vercel.app/check-birthdays"
  }
}

export default integrationSpecSettings;