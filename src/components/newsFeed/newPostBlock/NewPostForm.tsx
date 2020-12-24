import style from "./NewPostForm.module.css";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TNewPostFormData} from "./NewPostBlock";

const NewPostForm: React.FC<InjectedFormProps<TNewPostFormData>> = (props) => {

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

const NewPostReduxForm = reduxForm<TNewPostFormData>({form: "newPost"})(NewPostForm)
export default NewPostReduxForm