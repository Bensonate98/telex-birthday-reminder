import moment from "moment";
import { sendToChannel } from "./utils/feedback.js";
import integrationSpecSettings from "./utils/settings.js";
import birthdayList from "./model/users.js";

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