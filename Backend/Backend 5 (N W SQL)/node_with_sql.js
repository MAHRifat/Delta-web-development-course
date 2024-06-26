// Faker -> packages
    // To generate fake data
    // npm install --save-dev @faker-js/faker


    const { faker } = require('@faker-js/faker');

    let getRandomUser = ()=>  {
      return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
    }

    console.log(getRandomUser());


    // MySQL2 -> package
        // to connect Node with MySQL
        // connection.end()  -> to close connection

const mysql = require('mysql2');

// create the connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_stu',
  password: 'password',
});

let sqlcom = "show tables";

try{
    conn.query(sqlcom , (err, result) => {
        if(err) throw err;
        console.log(result);
    })
}catch(err){
    console.log(err);
}

// Using SQL from CLI/terminal
    // /usr/local/mysql/bin/mysql -u root -p  -> for mac 
    // create schema.sql
    // source schema.sql   // in CLI

// insert data

// let q = "insert into user (id, username, email, password) values (?, ?, ?, ?)";
let q = "insert into user (id, username, email, password) values ?";

// let user = ["123","123_newuser","abc@gmail.com", "abc"];
let user = [["123a","123_newusera","abca@gmail.com", "abca"],
 ["123b","123_newuserb","abcb@gmail.com", "abcb"]];


// try{
//   conn.query(q, [user], (err, result)=>{
//     if (err) throw err;
//     console.log(result);
//   });
// }catch(err){
//   console.log(err);
// }


// conn.end();



// insert in Bulk using faker

let createRandomUser = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let data = [];

for(let i=1;i<=100; i++){
  data.push(createRandomUser());
}

try{
  conn.query(q, [data], (err, result)=>{
    if (err) throw err;
    console.log(result);
  });
}catch(err){
  console.log(err);
}

