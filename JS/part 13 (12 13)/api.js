// api -> application programming interface

//           req                   req
// User <-------------> API <----------------> Server
//            resp                 resp



//  API gives up data in the format of json


//  some random apis
    // https://catfact.ninja/fact             (sends random cat facts)
    // https://www.boredapi.com/api/activity       (sends an activity to do when bored)
    // https://www.dog.ceo/api/breeds/image/random   (sends cute dog pictures)


// JSON -> javaScript object Notation    -> www.json.org

// Accessing data from JSON

    // JSON.parse(data) Method -> To parse a string data into a js object

    let jsonRes = '{"fact":"There are up to 60 million feral cats in the United States alone.","length":65}';

    let validRes = JSON.parse(jsonRes);  // convert json into object

    console.log(validRes);
    console.log(validRes.fact);



    // JSON.stringify (json) Method -> To parse a js objext data into json

    let student = {
        name : "Riat",
        age : 22,
        city: "Cumila" 
    };

    let jsonStu = JSON.stringify(student);   // convert js object into json

    console.log(jsonStu);




// testing api requests

    // tools -> Hoppscoth and Postman



// Ajax -> Asynchronous JavaScript and XML


// Status codes
    // 200 - ok
    // 404 - not found
    // 400 - bad request
    // 500 - internal server error



// Our first http request -> using Fetch

    // fetch(url)

let url = "https://catfact.ninja/fact";

fetch(url)
.then((response)=> {
    console.log(response);
   // console.log(response.json());  // get promise with the readable data

    // response.json().then((data)=> {
    //     console.log(data);
    // });

    return response.json();
})
.then((data)=> {
    console.log(data);
})
.catch((err)=> {
    console.log(err);
});


    // using fetch with async/await

    async function getFacts(){
        try{
            let res = await fetch(url);
            let data = await res.json();
            console.log(data.fact);

            let res2 = await fetch(url);
            let data2 = await res2.json();
            console.log(data2.fact);
        }catch(er){
            console.log("erreo : ",er);
        }    
    }

    getFacts();



// Axios -> Library to make HTTP requests
    //https://github.com/axios/axios?tab=readme-ov-file

async function GetFacts(){
    try{
        let res = await axios.get(url); 
        p.innerText =  res.data.fact;     
        console.log(p);

        let res2 = await axios.get(url);
        console.log(res2);
    }catch(er){
        console.log("erreo : ",er);
    }    
}



let p = document.querySelector("#fact");

let button = document.querySelector("button");

button.addEventListener("click", ()=> {
    GetFacts();
});



let url2 = "https://dog.ceo/api/breeds/image/random";

async function GetDog(){
    try{
        let res = await axios.get(url2);     
        console.log(res.data.message);
        let img = document.querySelector("img");
        img.src = res.data.message;
    }catch(er){
        console.log("erreo : ",er);
    }    
}


let dog = document.querySelector("#dog");

dog.addEventListener("click", ()=> {
    GetDog();
});


    // sending headers

    const url3 = "https://icanhazdadjoke.com/";

    async function getJokes() {
        try{
            const config = {headers : {Accept: "application/json"}};
            let res = await axios.get(url3, config);
            console.log(res.data);
        }catch(e){
            console.log("error: ", e);
        }
    };

    getJokes();


    // updating Query String in Axios

    let url4 = "http://universities.hipolabs.com/search?name=";

    async function getColleges(country){
        try{
            let res = await axios.get (url4+country);
            // console.log(res.data);
            return res.data;
        }
        catch(e){
            console.log("Error", e);
            return [];
        }
    };

    getColleges();


    let btn = document.querySelector("#search");

    btn.addEventListener("click",async ()=> {
        let country = document.querySelector("input").value;
        let colleges = await getColleges(country);
        show(colleges);
    });


    function show(colleges){
        let list = document.querySelector("#list");
        list.innerText = "";
        for(college of colleges){
            let li = document.createElement("li");
            li.innerText = college.name;
            list.appendChild(li);
        }
    };