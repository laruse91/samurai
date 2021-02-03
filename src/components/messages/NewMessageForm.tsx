import React from 'react'
import style from './NewMessageForm.module.css'
import {Form, Formik} from 'formik'
import {Input} from 'formik-antd'
import {Button} from '../common/button/Button'
import {antiSpamChecked} from '../../utilites/validators'

type TForm = {
    newMessage: string
}
type TProps = {
    sendNewMessage: (newMessageBody: string) => void
    channelStatus: boolean
}

const {TextArea} = Input

export const NewMessageForm: React.FC<TProps> = (props) => {

    const submit = (values: TForm, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        if (values.newMessage === '') {
            setSubmitting(false)
        }
        if (values.newMessage !== '') {
            if (antiSpamChecked(values.newMessage) === 'yes') {
                props.sendNewMessage(values.newMessage)
                values.newMessage = ''
            }
        }
        setSubmitting(false)
    }

    return (
        <div className={style.newMessageForm}>
            <Formik initialValues={{newMessage: ''}}
                    onSubmit={submit}>
                {({isSubmitting}) => (
                    <Form className={style.form}>
                        <TextArea name='newMessage' placeholder='Type your message' className={style.input}
                                  autoSize={{minRows: 2, maxRows: 2}}/>
                        <Button button={'Send'} type='submit' disabled={!props.channelStatus || isSubmitting}/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

