import moment from "moment";
import { sendToChannel } from "./utils/feedback.js";
import integrationSpecSettings from "./utils/settings.js";
import Users from "./model/users.js";


export const integrationJsonContrl = (req, res)=>{
  res.status(200).json(integrationSpecSettings);
};

export const checkBirthdaysForTelex = async (req, res)=>{
  try{
    const { settings, return_url} = req.body;
    if(!settings || !return_url){
      return res.status(400).json({error: "Invalid input"})
    }
    const allowedCronPattern = /^0 ([0-9]|1[0-9]|2[0-3]) \* \* \*$/;
    const userInterval = settings.find(s => s.label === "interval")?.default;
    if (!userInterval || !allowedCronPattern.test(userInterval)){
      return res.status(400).json({ 
        error: "Invalid interval! Please set a time for once per day (e.g., '0 6 * * *')."
      });
    }
    const birthdayList = await Users.find();
    const today = moment().format("MM-DD");

    const birthdaysToday = birthdayList.filter((person)=>{
      const birthday = moment(person.dateOfBirth, "YYY-MM-DD").format("MM-DD");
      return birthday === today;
    })
    
    let message;
    if(birthdaysToday.length > 0){
      birthdaysToday.forEach(async (person)=>{
        message = `Hurray!🎉 It's ${person.name}'s birthday. Happy birthday ${person.name}, May God bless and keep you.`
        sendToChannel(message, return_url)
      })
      return res.status(400).json({status: "accepted"});
    } else{
      message = "";
      sendToChannel(message, return_url);
      return res.status(400).json({status: "accepted"});
    }
  }
  catch(err){
    return res.status(500).json({status: "error", message: "Internal server error"});
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
    const { name, dateOfBirth } = req.body;
    if(!name || !dateOfBirth){
      res.status(400).json({status: "error", message: "input fields required"});
    }
    const newUser = await Users.create({name, dateOfBirth});
    return res.status(200).json({status: "sucess", message: "user created sucessfully", data: newUser});
  }
  catch(err){
    return res.status(500).json({status: "error", message: "Internal server error", data: newUser});
  }
}