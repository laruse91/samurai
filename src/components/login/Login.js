import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import FormControl from "../common/formsControl/FormControl";
import {maxLength, required} from "../../utilites/validators";
import Button from "../common/button/Button";
import {Redirect} from 'react-router-dom'
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const maxLength50 = maxLength(50)

const LoginForm = (props) => {
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

            <div className={style.input}>
                <Button button={'Login'}/>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div className={style.loginPage}>
            <div className={style.login}>
                <h2 className={style.title}>Authorization</h2>
                <hr/>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>


    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)