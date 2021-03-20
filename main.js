const express= require("express"), app=express(),
homeController=require("./controllers/homeController"),
errorController = require(".controllers/errorController"),
layouts = require("express-ejs-layouts");



app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(layouts);

app.get("/", (req,res) => {
    res.send("Welcome to Confetti Cuisine");
    console.log(req.query)
});

app.use(express.static("public"))
app.use(
    express.urlencoded({
        extended:false
    })
);

app.use(express.json());

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.interalServerError);

app.listen(app.get("port"), () =>{
    console.log(`Server is running on port: ${app.get("port")}`)

});

