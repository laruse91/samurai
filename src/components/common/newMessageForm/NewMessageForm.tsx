import React from 'react'
import style from './NewMessageForm.module.css'
import {Field, Form, Formik} from 'formik'
import {Button} from '../button/Button'

type TForm = {
    newMessage: string
}
type TProps = {

    sendNewMessage: (newMessageBody: string) => void
}

export const NewMessageForm: React.FC<TProps> = (props) => {

        const submit = (values: TForm, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
            values.newMessage &&
            props.sendNewMessage(values.newMessage)
            values.newMessage = ''
            setSubmitting(false)
        }

        return (
            <div className={style.newMessageForm}>
                <Formik initialValues={{newMessage: ''}}
                        onSubmit={submit}>
                    {({isSubmitting}) => (
                        <Form className={style.form}>
                            <Field type='text' name='newMessage' component='textarea' className={style.input}/>
                            <Button button={'Send'} type='submit' disabled={isSubmitting}/>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }

