import express from "express";
import moment from "moment";
import integrationSpecSettings from "./settings.js";
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

app.get("/", (req, res)=>{
  res.send("Hello Integration World");
});

//json url
app.get("/integration.json", (req, res)=>{
  return res.json(integrationSpecSettings);
})

const birthdayList = [
  {name: "Benson", dateOfbirth: "1998-10-23"},
  {name: "Mary", dateOfbirth: "2000-02-19"},
  {name: "John", dateOfbirth: "2001-02-19"},
  {name: "Benson", dateOfbirth: "1999-02-20"}
];

// Tick url
app.post("/tick", (req, res)=>{
  const { settings, return_url } = req.body;
  console.log(`settings: ${settings}`, `return_url: ${return_url}`);
  const data = req.body;
  console.log(data);
  const today = moment().format("MM-DD");

  const birthdaysToday = birthdayList.filter((person)=>{
    const birthday = moment(person.dateOfbirth, "YYY-MM-DD").format("MM-DD");
    return birthday === today;
  })
  
  if(birthdaysToday.length > 0){
    const message = birthdaysToday.map(person=>`Hurray!🎉 It's ${person.name}'s birthday. Happy birthday ${person.name}, May God bless and keep you.`)
    return res.status(202).json({message});
  }
  return res.json({ messages: [] });
})


app.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`);
})