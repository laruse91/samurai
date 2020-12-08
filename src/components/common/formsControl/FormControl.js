import React from 'react';
import style from './FormControl.module.css'

const FormControl = ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error
    return (
        <div className={style.formControl}>
            <input className={style.input + ' ' + (hasError || props.error ? style.wrong : '')} {...input} {...props}
                   autoComplete="current-password"/>

            {hasError &&
            <div className={style.attention}>
                <span>{error}</span>
            </div>
            }
        </div>
    )
}

export default FormControl