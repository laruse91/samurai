import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import FormControl from "../common/formsControl/FormControl";
import {maxLength, required} from "../../utilites/validators";
import Button from "../common/button/Button";
import {Redirect} from 'react-router-dom'
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {TGlobalState} from "../../redux/redux-store";

const maxLength50 = maxLength(50);
const maxLength6 = maxLength(6);

type TStateProps = {
    captchaURL: string | null
    isAuth: boolean
}
type TDispatchProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null)=> void
}
type TProps = TStateProps & TDispatchProps

type TFormProps = {
    onSubmit: any //()=>void
    captchaURL: string | null
    error?: string | null
    handleSubmit?: any

}

let LoginForm = (props: TFormProps) => {
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

// @ts-ignore
LoginForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props: TProps) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div className={style.loginPage}>
            <div className={style.login}>
                <h2 className={style.title}>Authorization</h2>
                <hr/>
                <LoginForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: TGlobalState):TStateProps  => ({
    captchaURL: state.auth.captchaURL,
    isAuth: state.auth.isAuth
})
// @ts-ignore
export default connect<TStateProps, TDispatchProps>(mapStateToProps, {login})(Login)