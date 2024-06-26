
    const { faker } = require('@faker-js/faker');
const { count } = require('console');
    const express = require('express');
    const app = express();
    const mysql = require('mysql2');
    const path = require('path');
    const methodOverride = require('method-override');
    app.use(methodOverride("_method"));
    app.use(express.urlencoded({extended: true}));

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "/views"));
// create the connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_stu',
  password: 'password',
});

// insert in Bulk using faker

// let createRandomUser = ()=> {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// }

// let data = [];

// for(let i=1;i<=100; i++){
//   data.push(createRandomUser());
// }





app.listen("8000", ()=> {
    console.log("server is listening to port 8000");
});

// home route

app.get("/",(req, res)=> {
    // res.send("welcome to homepage");
    let q = `select count(*) from user`;
    try{
        conn.query(q, (err, result)=>{
          if (err) throw err;
          let count = result[0]["count(*)"];
          console.log(result[0]["count(*)"]);
        //   res.send(result);
            res.render("home.ejs", {count});
        });
      }catch(err){
        console.log(err);
        res.send("some error in DB");
      }
});


// show route

app.get("/user", (req, res)=> {
    // res.send("worked");
    let q = `select * from user`;
    try{
        conn.query(q, (err, result)=>{
          if (err) throw err;
            res.render("user.ejs", {result});
        });
      }catch(err){
        console.log(err);
        res.send("some error in DB");
      }
});


// edit route

app.get("/user/:id/edit", (req, res)=> {
    let {id} = req.params;
    let q = `select * from user where id = '${id}'`;
    try{
        conn.query(q, (err, result)=>{
          if (err) throw err;
          let user = result[0];
          res.render("edit.ejs", {user});
        });
      }catch(err){
        console.log(err);
        res.send("some error in DB");
      }
    
});

// update (DB) route

app.patch("/user/:id", (req, res)=> {
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `select * from user where id = '${id}'`;
    try{
        conn.query(q, (err, result)=>{
          if (err) throw err;
          let user = result[0];
          if(formPass != user.password){
            res.send("Worng password");
          }else{
            let q2 = `update user set username='${newUsername}' where id='${id}'`;
            conn.query(q2, (err, result)=> {
                if(err) throw err;
                // res.send("update successfully added");
                res.redirect("/user");
            });
          }
        });
      }catch(err){
        console.log(err);
        res.send("some error in DB");
      }
});

// delete data

app.get("/user/:id", (req,res)=> {
    let {id} = req.params;
    let q = `select * from user where id = '${id}'`;
    try{
        conn.query(q, (err, result)=>{
          if (err) throw err;
          let user = result[0];
          res.render("delete.ejs", {user});
        });
      }catch(err){
        console.log(err);
        res.send("some error in DB");
      }
});

app.patch("/user/:id/delete", (req, res)=>{
    let {id} = req.params;
    let {email: formEmail, password: formPassword} = req.body;
    let q = `select * from user where id = '${id}'`;
    try {
        conn.query(q, (err, result)=>{
            if(err) throw err;
            let user = result[0];
            if(formEmail == user.email && formPassword == user.password){
                let q2 = `delete from user where email='${formEmail}'`;
                conn.query(q2, (err, result)=> {
                    if(err) throw err;
                    console.log(result);
                    res.redirect("/user");
                });
            }else{
                res.send("somethings wrong in email or password");
            }
            
        });
    } catch (err) {
        res.send("error");
    }
        
    // res.send("delete success");    
});


// add new user

app.get("/new", (req, res)=> {
    res.render("form.ejs");
});  


app.post("/user/add", (req, res)=> {
    let {id,username,email,password} = req.body;
    let q = `insert into user values (?,?,?,?)`;
    let data = [id,username,email,password];
    conn.query(q,data, (err, result)=> {
        if(err) throw err;
        res.redirect("/user");
    } )
});