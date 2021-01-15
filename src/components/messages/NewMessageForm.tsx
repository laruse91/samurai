import React, {useEffect, useState} from 'react'
import style from './NewMessageForm.module.css'
import {Form, Formik} from 'formik'
import {Input} from 'formik-antd'
import {Button} from '../common/button/Button'

type TForm = {
    newMessage: string
}
type TProps = {
    sendNewMessage: (newMessageBody: string) => void
    ws?: WebSocket | null
}

const {TextArea} = Input

export const NewMessageForm: React.FC<TProps> = (props) => {
    const [statusReady, setStatusReady] = useState<'pending' | 'ready'>('pending')
    useEffect(() => {
        const openHandler = ()=>{setStatusReady('ready')
        console.log('ready')}
        props.ws?.addEventListener('open', openHandler)

        return ()=>{
            props.ws?.removeEventListener('open', openHandler)
        }

    }, [props.ws])

    const submit = (values: TForm, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        values.newMessage &&
        props.sendNewMessage(values.newMessage)
        values.newMessage = ''
        setSubmitting(false)
    }

    const ChannelNotReady = (props.ws === null || statusReady === 'pending')

    return (
        <div className={style.newMessageForm}>
            <Formik initialValues={{newMessage: ''}}
                    onSubmit={submit}>
                {({ isSubmitting}) => (
                    <Form className={style.form}>
                        <TextArea name='newMessage' placeholder='Type your message' className={style.input}
                                  autoSize={{minRows: 1, maxRows: 3}}/>
                        <Button button={'Send'} type='submit' disabled={ChannelNotReady}/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

