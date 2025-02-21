import axios from "axios";

export const sendToChannel = async (message, return_url)=>{
  const payload = {
    message,
    username: "Birthday Reminder",
    event_name: "Birthday Alert",
    status: "success"
  }
  await axios.post(return_url, payload);
}