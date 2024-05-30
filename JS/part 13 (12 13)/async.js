// async fucntions -> async & await keywords

// async -> create a async function

async function greet(){   // return a promise
    // throw "some random error";   // throw show random error
    return "hello";  
}

greet()
.then((result)=> {
    console.log("promised was fulfiled");
    console.log("result was :", result);
})
.catch(()=>{
    console.log("promise was not fulfiled");
});



// await keywork -> pauses the execution of its surrounding async function until the promise is settled
    // -> (resolved or rejected)

function getNum() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 2000);
    });
}

async function demo(){
    getNum();
    getNum();
    getNum();
    await getNum();       // ekta call complete hoyar por onnota complete korte await use korte hobe
    await getNum();
    await getNum();
}

demo();



// use await for color change 

let h2 = document.querySelector("h2");

function Colorchange(color, delay){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            h2.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        }, delay);
    })   
}

async function callChange(){
    try{
        await Colorchange("blue",1000);
        await Colorchange("red",1000);
        await Colorchange("gray",1000);
    }catch(err){
        console.log("error found");
    }
    
}


callChange();

// handling rejections with await  -> use try and catch

