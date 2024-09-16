import { useState } from "react"

export default function CommentForm({addNewComment}){
    let [comment, setComment] = useState({
        username: "",
        remarks: "",
        rating: 5
    }); 

    let onChangeForm = (event) => {
        setComment((currComs)=> {
            return{
                ...currComs, [event.target.name]: event.target.value
            };
        });
    }

    let onSubmitForm = (e) => {
        console.log(comment);
        addNewComment(comment);
        e.preventDefault();
        setComment({
            username: "",
            remarks: "",
            rating: 5
        });
    };

    return(
        <div>
            <h3>Comment Here!</h3>
            <form action="" onSubmit={onSubmitForm}>
                <label htmlFor="username">username : </label>
                <input type="text" name="username" placeholder="username" id="username" value={comment.username} onChange={onChangeForm}/>
                <br /><br />
                <label htmlFor="remarks">Remarks : </label>
                <textarea name="remarks" id="remarks" value={comment.remarks} onChange={onChangeForm}></textarea>
                <br /><br />
                <label htmlFor="rating">Rating : </label>
                <input type="number" name="rating" placeholder="rating" id="rating" min={1} max={5} value={comment.rating} onChange={onChangeForm}/>
                <br /><br />
                <button>Add comment</button>
            </form>
        </div>
    )
}