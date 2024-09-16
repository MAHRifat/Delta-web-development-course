import { useState } from "react";
import CommentForm from "./CommentForm";
import './CommentShow.css'

export default function CommentShow(){
    let [comments, setComments] = useState([{
        username: "kuddus",
        remarks: "great",
        rating: 5
    }]);

    let addNewComment = (comment)=> {
        setComments((currComs)=> [...currComs, comment]);
    };

    return(
        <>
            <CommentForm addNewComment={addNewComment}/>
            <br /> <br /> <br />
            <hr />
            <h2>Show all Comment</h2>
            <div className="comments">
            {
                comments.map((comment,idx)=>( 
                    <div className="comment" key={idx}>
                        <p>@{comment.username}</p>
                        <p>{comment.remarks}</p>
                        <p>Rating: {comment.rating}</p>
                    </div>
                ))
            }
            </div>


        </>
    )


}