function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();




// we can access callstack using break points

// inspact -> source -> callstack.js 


// JS is single Threaded -> execute one code in one time
// C++ and java are multi threaded

// JS is synchronous but we can do asynchonous work by using setTimeout()

// syschronous mean code execute one by one 






// callstack Hell

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange){
    setTimeout(()=> {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}


// callbacks nesting -> callback hell

changeColor("red", 1000, () => {
    changeColor("orange", 1000, ()=> {
        changeColor("green", 1000);
    });
});


// promises -> save us from callback hell
    // -> The promise object represents the eventual eompletion (or failure)
    //      of an asynchronous operation and its resulting value.


// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success(data);
//     }
//     else{
//         failure();
//     }
// }

// savetoDb("promises", (data) => {                     // callback hell
//     console.log("your data was saved: ", data);
//     savetoDb("hello world", (data)=> {
//         console.log("your was saved2:", data);
//     },()=> {
//         console.log("weak connection, data not saved");
//     });
// }, ()=> {
//     console.log("weak connection, data not saved");
// });



// promises -> objecj -> resolve or success / reject or faileur

function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("Success: Data was save.");
        }
        else{
            reject("Failure: weak connection, data wasn't save");
        }
    });
   
}



// then() -> promisec fulfiled hoyar por kono kaj korte then() use kora hoy
//  & catch() -> promises reject hoyar por kono kaj korte catch() use kora hoy

// promises chaining

savetoDb("Rifat")
.then((result)=> {
    console.log("Data 1 saved.");
    console.log(result);
    return savetoDb("hello world");
})
.then((result)=> {
    console.log("Data 2 saved. ");
    console.log(result);
    return savetoDb("Nilu");
})
.then((result)=> {
    console.log("Data 3 saved");
    console.log(result);
})
.catch((error)=>{
    console.log("promises was rejected");
    console.log(error);
});


// let's apply promises to our callback hell






let h2 = document.querySelector("h2");

function Colorchange(color, delay){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            h2.style.color = color;
            resolve("color changed");
        }, delay);
    })   
}


// Colorchange("red", 1000, () => {               // callback hell
//     Colorchange("orange", 1000, ()=> {
//         Colorchange("green", 1000);
//     });
// });

Colorchange("red",1000)                      // promises chaning 
.then((result)=> {
    console.log(result);
    return Colorchange("orange", 1000);
})
.then((result)=> {
    console.log(result);
    return Colorchange("green", 1000);
})
.then((result)=>{
    console.log(result);
})
.catch(()=>{
    console.log("color was not chagne");
});