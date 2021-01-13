import React from 'react'
import style from './Button.module.css'

type TProps = {
    disabled?: boolean
    onClick?: ()=>void
    type?:string
    button: string | null
}
export const Button: React.FC<TProps> = (props) => {

    return (
        <div className={style.btnBlock}>
            <button className={style.button}
                    disabled={props.disabled}
                    onClick={props.onClick}
            type={'submit'}>
                {props.button}
            </button>
        </div>
    )
}
