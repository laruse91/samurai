import React from 'react';
import style from './NewMessageForm.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TNewMessageFormData} from "../Messages";

const NewMessageForm: React.FC<InjectedFormProps<TNewMessageFormData>> = (props) => {

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


const NewMessageReduxForm = reduxForm<TNewMessageFormData>({form: 'newMessage'})(NewMessageForm)

export default NewMessageReduxForm;