import React from 'react';
import style from './FormControl.module.css'
import {WrappedFieldProps} from "redux-form";

const FormControl: React.FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...props}) => {


    // @ts-ignore
    const hasError = (touched && error) || props.error
    debugger
    return (
        <div className={style.formControl}>
            <input className={style.input + ' ' + (hasError ? style.wrong : '')} {...input} {...props}
                   autoComplete="yes"/>

            {hasError &&
            <div className={style.attention}>
                <span>{error}</span>
            </div>
            }
        </div>
    )
}

export default FormControl