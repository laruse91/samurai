import React from 'react';
import style from './Button.module.css';

type TProps = {
    disabled?: boolean
    onClick?: ()=>void
    button: string | null
}
const Button = (props: TProps) => {

    return (
        <div className={style.btnBlock}>
            <button className={style.button}
                    disabled={props.disabled}
                    onClick={props.onClick}>
                {props.button}
            </button>
        </div>
    )
}

export default Button