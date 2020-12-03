import React from 'react';
import style from './NewMessageForm.module.css';
import {Field, reduxForm} from "redux-form";

let newMessageForm = (props) => {

    return (
        <div className={style.newMessageForm}>
            <div className={style.options}>
                <img src="#" alt="ico"/>
                <img src="#" alt="ico"/>
            </div>
            <form className={style.form} onSubmit={props.handleSubmit}>
                <Field component={"textarea"}
                       name={"newMessageBody"}
                       placeholder={"Type your message"}
                       className={style.input}
                />
                <div className={style.send}>
                    <img src="#" alt="ico"/>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

newMessageForm = reduxForm({form: 'newMessage'})(newMessageForm)
export default newMessageForm;