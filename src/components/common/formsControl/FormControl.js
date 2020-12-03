import React from 'react';
import style from './FormControl.module.css'

const FormControl = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControl}>
            <input className={style.input + ' ' + (hasError ? style.wrong : '')} {...input} {...props} autoComplete="current-password"/>

            {hasError &&
            <div className={style.attention}>
                <span>{meta.error}</span>
            </div>
            }
        </div>
    )
}

export default FormControl