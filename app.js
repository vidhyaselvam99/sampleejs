const express = require("express");

const app = express();

app.set("view engine", "ejs");

const day = new Date();

today = day.getDay();
currentDay = "";
switch (today) {
  case 0:
    currentDay = "Sunday";
    break;
  case 1:
    currentDay = "Monday";
    break;
  case 2:
    currentDay = "Tueday";
    break;
  case 3:
    currentDay = "Wednesday";
    break;
  case 4:
    currentDay = "Thursday";
    break;
  case 5:
    currentDay = "Friday";
    break;
  case 6:
    currentDay = "Saturday";
    break;
  default:
      console.log(`error ${day}`);
    break;
}

app.get("/", function (req, res) {
  
  res.render('list',{weekDay:currentDay});
 
});

app.listen(5050);
