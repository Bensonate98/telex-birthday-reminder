# Telex Birthday Reminder Integration

## 📌 Overview

The **Telex Birthday Reminder** is an integration that sends automated birthday reminders to a specified Telex channel. This ensures that team members never miss celebrating a colleague’s birthday.

## 🎯 Features

- Automatically checks for upcoming birthdays
- Sends reminders to a Telex channel
- Allows users to add and manage birthdays using a Telex Command Integration
- Runs at a specified interval using Telex's Interval Integration

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites

- **Node.js** (v16 or later)
- **MongoDB Atlas** (or a local MongoDB instance)
- **Telex Account** (with a test channel)

### 2️⃣ Installation

```sh
# Clone the repository
git clone https://github.com/your-username/telex-birthday-reminder.git
cd telex-birthday-reminder

# Install dependencies
npm install
```

### 3️⃣ Configuration

1. **Create a **``** file** in the root directory and add the following:

```ini
PORT=8000
MONGO_URI=mongodb+srv://your-db-credentials
TELEX_BOT_TOKEN=your-telex-bot-token
TELEX_CHANNEL_ID=your-telex-channel-id
```

2. **Update **`` if needed.

### 4️⃣ Running the Integration Locally

```sh
npm start
```

Your server should now be running on `http://localhost:8000`.

### 5️⃣ Testing the Integration

#### ➤ Using Curl

```sh
curl --location 'http://localhost:8000/tick' \
--header 'Content-Type: application/json' \
--data '{
    "channel_id": "<your-telex-channel-id>",
    "return_url": "https://ping.telex.im/v1/return/<your-telex-channel-id>",
    "settings": [
        { "label": "interval", "type": "text", "required": true, "default": "0 9 * * *" }
    ]
}'
```

#### ➤ Using Postman

1. Open **Postman**
2. Create a `POST` request to `http://localhost:8000/tick`
3. Add the following JSON body:

```json
{
  "channel_id": "<your-telex-channel-id>",
  "return_url": "https://ping.telex.im/v1/return/<your-telex-channel-id>",
  "settings": [{ "label": "interval", "type": "text", "default": "0 9 * * *" }]
}
```

4. Click **Send** and check the response.

### 6️⃣ Deploying the Integration

#### ➤ Deploy to **Vercel**

```sh
vercel
```

#### ➤ Deploy to **AWS EC2**

```sh
# SSH into your instance
ssh ubuntu@your-ec2-instance-ip

# Clone the repository
git clone https://github.com/your-username/telex-birthday-reminder.git
cd telex-birthday-reminder

# Install dependencies and start the server
npm install
pm start
```

### 7️⃣ Setting Up Telex Integration

1. Go to **Telex Dashboard** > **Integrations**
2. Click **Create Integration**
3. Use `https://your-deployment-url.com/tick` as the **target URL**
4. Set the **interval** (e.g., `0 9 * * *` for daily 9 AM reminders)
5. Save and activate the integration

## 📸 Screenshots

### 🎉 Birthday Reminder in Action

(Screenshot of the Telex Channel with a reminder message)

## 📌 Contributors

- **Your Name** ([@your-github](https://github.com/your-github))

## 📝 License

This project is licensed under the **MIT License**.

---

💡 *Feel free to contribute and improve this integration!* 🚀

