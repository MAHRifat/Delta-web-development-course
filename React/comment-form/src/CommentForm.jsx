import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
  
    if (!values.remarks) {
      errors.remarks = 'Required';
    }
  
    if (!values.rating) {
      errors.rating = 'Required';
    }
  
    return errors;
  };

export default function CommentForm({addNewComment}){
    // let [comment, setComment] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // }); 

    const formik = useFormik({
        initialValues: {
          username: '',
          remarks: '',
          rating: 5,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    // let onChangeForm = (event) => {
    //     setComment((currComs)=> {
    //         return{
    //             ...currComs, [event.target.name]: event.target.value
    //         };
    //     });
    // }

    // let onSubmitForm = (e) => {
    //     console.log(comment);
    //     addNewComment(comment);
    //     e.preventDefault();
    //     setComment({
    //         username: "",
    //         remarks: "",
    //         rating: 5
    //     });
    // };

    return(
        <div>
            <h3>Comment Here!</h3>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="username">username : </label>
                <input type="text" name="username" placeholder="username" id="username" value={formik.values.username} onChange={formik.handleChange}/>
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <br /><br />
                <label htmlFor="remarks">Remarks : </label>
                <textarea name="remarks" id="remarks" value={formik.values.remarks} onChange={formik.handleChange}></textarea>
                {formik.errors.remarks ? <div>{formik.errors.remarks}</div> : null}
                <br /><br />
                <label htmlFor="rating">Rating : </label>
                <input type="number" name="rating" placeholder="rating" id="rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange}/>
                {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
                <br /><br />
                <button>Add comment</button>
            </form>
        </div>
    )
}