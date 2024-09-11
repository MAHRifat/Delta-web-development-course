function handleFormSubmit(event){
    event.preventDefault();     // default the prevent behaivior when form submitted
    console.log("form was submitted");
}


export default function Form(){
    return(
        <form action="" onSubmit={handleFormSubmit}>
            <input type="text" />
            <button>Submit</button>
        </form>
    )
}