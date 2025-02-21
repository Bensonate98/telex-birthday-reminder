import express from "express";
import cors from "cors";
import routes from "./routes.js";
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
  res.send("Hello Integration World");
});

app.use(routes);


app.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`);
})