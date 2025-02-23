 const integrationSpecSettings = {
  "data": {
    "date": {
      "created_at": "2025-02-19",
      "updated_at": "2025-02-19"
    },
    "descriptions": {
      "app_description": "The Telex Birthday Reminder is an integration that sends automated birthday reminders to a specified Telex channel. This ensures that team members never miss celebrating a colleague’s birthday.",
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
      "Automated birthday messages",
      "Interval-Based Execution",
      "Keeps team members engaged"
    ],
    "settings": [
      {
        "label": "interval",
        "type": "text",
        "default": "0 6 * * *",
        "required": true
      }
    ],
    "tick_url": "https://telex-birthday-reminder.vercel.app/check-birthdays"
  }
}

export default integrationSpecSettings;

