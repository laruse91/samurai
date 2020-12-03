import React from 'react';
import style from './Button.module.css';


const Button = (props) => {

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