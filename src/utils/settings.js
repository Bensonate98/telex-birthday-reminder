export const integrationSpecSettings = {
  "data": {
    "date": {
      "created_at": "2025-02-19",
      "updated_at": "2025-02-19"
    },
    "descriptions": {
      "app_description": "Birthday Reminder notifies your team about members birthday by sending a birthday wish (message) to the channel",
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
    "key_features": [
      "Birthday messages for team members",
      "Customizable time for notification",
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

export const birthSaverJsonSettings = {
    "data": {
      "date": {
        "created_at": "2025-02-22",
        "updated_at": "2025-02-22"
      },
      "descriptions": {
        "app_description": "Birth Saver Saves your birthday so that Birthday Reminder can celebrate you.",
        "app_logo": "https://img.freepik.com/free-vector/shield-shape-recycle-arrows_78370-5590.jpg",
        "app_name": "Birth-Saver bot",
        "app_url": "https://telex-birthday-reminder.vercel.app",
        "background_color": "#fff"
      },
      "integration_category": "Monitoring & Logging",
      "integration_type": "modifier",
      "is_active": true,
      "key_features": [
        "Saves your team members names and birthdays by entering the command below:",
        "/add-birthday <username> <YYYY-MM-DD>",
        "e.g /add-birthday Bensonate 1999-10-23",
        "And click send. Voila you are good to go!"
      ],
      "settings": [
        {
          "label": "Provide Speed",
          "type": "number",
          "required": true,
          "default": "1000"
        }
      ],
      "target_url": "https://telex-birthday-reminder.vercel.app/save-user"
    }
}