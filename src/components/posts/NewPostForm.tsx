import React from 'react'
import style from './NewPostForm.module.css'
import {Input} from 'formik-antd'
import {Form, Formik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {selectAuthorizedUser, selectPosts} from '../../selectors/selectors'
import {actions, TPost} from '../../redux/posts-reducer'
import {Avatar} from 'antd'
import {styles} from '../../styles/styles'
import {Button} from '../common/button/Button'
import {antiSpamChecked} from '../../utilites/validators'

type TForm = {
    postBody: string
}

const {TextArea} = Input

export const NewPostForm: React.FC = () => {
// useSelector Hooks
    const authorizedUser = useSelector(selectAuthorizedUser)
    const posts = useSelector(selectPosts)
// useDispatch Hooks
    const dispatch = useDispatch()
    const submit = (values: TForm, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        if (values.postBody === '') {
            setSubmitting(false)
        }
        if (values.postBody !== '') {
            if (antiSpamChecked(values.postBody) === 'yes') {
                const newPost: TPost = {
                    id: (posts.length + 1),
                    userId: authorizedUser.userId!,
                    postBody: values.postBody
                }

                dispatch(actions.publicNewPost(newPost))
                values.postBody = ''

            }
            setSubmitting(false)
        }
    }

    return (
        <div className={style.newPost}>
            <div className={style.title}>
                <h2>Create Post</h2>
            </div>

            <div className={style.newPostForm}>
                <div className={style.userPhoto}>
                    {authorizedUser.userPhoto
                        ? <Avatar size={60} src={authorizedUser.userPhoto}/>
                        : <Avatar size={60}
                                  style={styles.avatar}>{authorizedUser.userName?.charAt(0).toUpperCase()}</Avatar>
                    }
                </div>
                <Formik<TForm> initialValues={{postBody: ''}} onSubmit={submit}>

                    {({isSubmitting}) => (
                        <Form className={style.form}>
                            <TextArea name='postBody' placeholder='Type your post' rows={2} className={style.input}/>
                            <Button button='Public' type='submit' disabled={isSubmitting}/>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}
