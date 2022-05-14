//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = [ "Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
// let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

 const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items
});

app.post("/", function(req, res){
    const item = req.body.newItem;
     
    if(req.body.list == "Work"){
        workItems.push(item);
        res.redirect("/work")
    }else{
      items.push(item);
      res.redirect("/");
    }
 

    // res.render("list", {newListItem: item});
    // console.log(item);
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.get("/about", function(req, res){
    res.render("about");
});
 



//   const currentDay = today.getDay();
//   let day = "";

//   if(currentDay==0){
//     day = "Sunday";
//    }
//    if(currentDay==1){
//     day = "Monday";
//    }
//    if(currentDay==2){
//     day = "Tuesday";
//    }
//    if(currentDay==3){
//     day = "Wednesday";
//    }
//    if(currentDay==4){
//     day = "Thursday";
//    }
//    if(currentDay==5){
//     day = "Friday";
//    }
//    if(currentDay==6){
//     day = "Saturday";
//    }

   

// ___________________USING FOR LOOP__________________________

// function day() {
//     let today = new Date();
//     let week = new Array(
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday"
//     );
  
//     for (i = 0; i < week.length; i++) {
//       res.render("list", {kindOfDay: week[today.getDay(i)]});
      
//     }
//   }
//   day();
// __________________________________________________________________

});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
