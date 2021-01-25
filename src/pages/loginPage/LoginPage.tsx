import React from 'react'
import style from './LoginPage.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import FormControl from '../../components/common/formsControl/FormControl'
import {maxLength, required} from '../../utilites/validators'
import {Button} from '../../components/common/button/Button'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {selectCaptchaURL, selectIsAuth} from '../../selectors/selectors'
import {login} from '../../redux/auth-reducer'
import {InfoCircleOutlined} from '@ant-design/icons'
import {Popover} from 'antd'

//types
type TLoginFormData = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type TFormOwnProps = {
    captchaURL: string | null
}

const maxLength50 = maxLength(50)
const maxLength6 = maxLength(6)

const LoginForm: React.FC<InjectedFormProps<TLoginFormData, TFormOwnProps> & TFormOwnProps> = (props) => {
    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div className={style.input}>
                <Field component={FormControl}
                       name='email'
                       type='text'
                       placeholder='E-mail'
                       error={props.error}
                       validate={[required, maxLength50]}
                />
            </div>
            <div className={style.input}>
                <Field component={FormControl}
                       name='password'
                       type='password'
                       placeholder='Password'
                       error={props.error}
                       validate={[required]}
                />
                {props.error &&
                <div className={style.attention}>
                    <span>{props.error}</span>
                </div>
                }
            </div>
            <div className={style.input}>
                <Field component='input'
                       name='rememberMe'
                       type='checkBox'/> Remember me
            </div>
            {props.captchaURL &&
            <div className={style.captcha}>
                <img src={props.captchaURL} alt='ico'/>
                <div className={style.input}>
                    <Field component={FormControl}
                           name='captcha'
                           type='text'
                           placeholder='Type captcha here'
                           error={props.error}
                           validate={[required, maxLength6]}
                    />
                </div>
            </div>

            }
            <div className={style.input}>
                <Button button={'Sign in'}/>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<TLoginFormData, TFormOwnProps>({form: 'login'})(LoginForm)

const LoginPage: React.FC = () => {
    //useSelectorHooks
    const isAuth = useSelector(selectIsAuth)
    const captchaURL = useSelector(selectCaptchaURL)
    //useDispatchHook
    const dispatch = useDispatch()

    const onSubmit = (formData: TLoginFormData) => {
        dispatch(login(formData.email.trim(), formData.password, formData.rememberMe, formData.captcha))
    }

    const content = (
        <div>
            <p>login: laruse91@gmail.com</p>
            <p>password: laruse91</p>
        </div>
    )
    if (isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <div className={style.loginPage}>
            <div className={style.login}>
                <h2>Authorization</h2>
                <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
                <Popover content={content} title='For testing site you can use my account'>
                    <InfoCircleOutlined className={style.inform}/>
                </Popover>
            </div>
        </div>
    )
}
export default LoginPage