import moment from "moment";
import { sendToChannel } from "./utils/feedback.js";
import { integrationSpecSettings, birthSaverJsonSettings } from "./utils/settings.js";
import { isValidBirthdaySaverCommand } from "./utils/validate.js";
import Users from "./model/users.js";


export const integrationJsonContrl = (req, res)=>{
  res.status(200).json(integrationSpecSettings);
};

export const checkBirthdaysForTelex = async (req, res)=>{
  try{
    const { settings, return_url } = req.body;
    const today = moment().format("MM-DD");

    const birthdaysToday = birthdayList.filter((person)=>{
      const birthday = moment(person.dateOfbirth, "YYY-MM-DD").format("MM-DD");
      return birthday === today;
    })
    
    let message;
    if(birthdaysToday.length > 0){
      birthdaysToday.forEach(person=>{
        message = `Hurray!🎉 It's ${person.name}'s birthday. Happy birthday ${person.name}, May God bless and keep you.`
        sendToChannel(message, return_url) 
      })
    } else{
      message = "";
      sendToChannel(message, return_url); 
    }
  }
  catch(err){
    console.log(err);
  }
}

//Birthday saver controllers
export const birthdaySaverJsonContrl = (req, res)=>{
  res.status(200).json(birthSaverJsonSettings);
}

export const getAllUsers = async (req, res)=>{
  try{
    const users = await Users.find();
    return res.status(200).json(users);
  }
  catch(err){
    console.log(err)
  }
}

export const createUser = async (req, res)=>{
  try{
    const { channel_id, message } = req.body;
    console.log(channel_id, message);
    if(isValidBirthdaySaverCommand(message)){
      const part =  message.split(" ");
      const requiredData = part.slice(1, 3);
      const userData = {
        name: requiredData[0],
        dateOfBirth: requiredData[1]
      }
      const newUser = await Users.create(userData);
      return res.status(200).json({
        "event_name": "Data saved",
        "message": "Your name and birthday has been saved successfully. Cheers!",
        "status": "success",
        "username": "Birth-Saver bot"
      });
    }
  }
  catch(err){
    console.log(err)
  }
}