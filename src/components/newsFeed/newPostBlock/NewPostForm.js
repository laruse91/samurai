import style from "./NewPostForm.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";

let NewPostForm = (props) => {

    return (
        <div className={style.newPostForm}>
        <form className={style.form} onSubmit={props.handleSubmit}>
            <Field component={"textarea"}
                   name={"newPostBody"}
                   placeholder={"Write something here"}
                   className={style.input}
            />
            <div className={style.send}>
                <img src="#" alt="ico"/>
                <button>Public</button>
            </div>
        </form>
        </div>
    )
}

NewPostForm = reduxForm({form: "newPost"})(NewPostForm)
export default NewPostForm