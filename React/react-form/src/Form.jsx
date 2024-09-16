import { useState } from "react"

export default function Form(){
    // let [fullName, setFullName] = useState();
    let [formData, setFormData] = useState({
        fullName: "",
        username: ""
    });

    function handleInputChange(event){
        let fieldName = event.target.name;
        let newValue = event.target.value;
        // setFullName(event.target.value);
        setFormData((currData)=>{
            currData[fieldName] = newValue;
            return{
                ...currData
            };
        });
    };

    let handleSubmit = (event)=> {
        event.preventDefault();
        setFormData({
            fullName: "",
        username: ""
        });
    };
    

    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full name : </label>&nbsp;
            <input name="fullName" id="fullname" type="text" placeholder="write something" value={formData.fullName} onChange={handleInputChange}/>
            <label htmlFor="username">Username : </label>&nbsp;
            <input name="username" id="username" type="text" placeholder="write something" value={formData.username} onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
    )
}