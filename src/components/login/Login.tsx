import React from 'react';
import style from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import FormControl from "../common/formsControl/FormControl";
import {maxLength, required} from "../../utilites/validators";
import Button from "../common/button/Button";
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getCaptchaURL, getIsAuth} from "../../redux/selectors";
import { login } from '../../redux/auth-reducer';

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

const maxLength50 = maxLength(50);
const maxLength6 = maxLength(6);

const LoginForm: React.FC<InjectedFormProps<TLoginFormData, TFormOwnProps> & TFormOwnProps> = (props) => {
    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div className={style.input}>
                <Field component={FormControl}
                       name="email"
                       type="text"
                       placeholder="email"
                       error={props.error}
                       validate={[required, maxLength50]}
                />
            </div>
            <div className={style.input}>
                <Field component={FormControl}
                       name="password"
                       type="password"
                       placeholder="Password"
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
                <Field component="input"
                       name="rememberMe"
                       type="checkBox"/> Remember me
            </div>
            {props.captchaURL &&
            <div className={style.captcha}>
                <img src={props.captchaURL} alt="ico"/>
                <div className={style.input}>
                    <Field component={FormControl}
                           name="captcha"
                           type="text"
                           placeholder="Type captcha here"
                           error={props.error}
                           validate={[required, maxLength6]}
                    />
                </div>
            </div>

            }
            <div className={style.input}>
                <Button button={'Login'}/>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<TLoginFormData, TFormOwnProps>({form: 'login'})(LoginForm);

const Login: React.FC = () => {
    //useSelectorHooks
    const isAuth = useSelector(getIsAuth)
    const captchaURL = useSelector(getCaptchaURL)
    //useDispatchHook
    const dispatch = useDispatch()

    const onSubmit = (formData: TLoginFormData) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div className={style.loginPage}>
            <div className={style.login}>
                <h2 className={style.title}>Authorization</h2>
                <hr/>
                <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
            </div>
        </div>
    )
}
export default Login