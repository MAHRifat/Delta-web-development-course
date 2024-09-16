import { useState } from "react"

export default function CommentForm(){
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });

    let onChangeFormData = (event)=> {
        setFormData((currData)=> {
            return{...currData, [event.target.name]: event.target.value};
        });
    };

    let onSubmitForm = (e)=> {
        e.prventDefault();
        setFormData((currData)=> {
            return{
                username: "",
                remarks: "",
                rating: "5",
            }
        })
    }

    return(
        <div>
            <h3>Give a comment!</h3>
            <form action="" onSubmit={onSubmitForm}>
                <input name="username" type="text" placeholder="username" value={formData.username} onChange={onChangeFormData}/><br /><br />
                <textarea name="remarks" id="comment" value={formData.remarks} placeholder="add some remarks" onChange={onChangeFormData}></textarea><br /><br />
                <input name="rating" type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={onChangeFormData}/><br /><br />
                <button>Add comment</button>
            </form>
        </div>
    )
}