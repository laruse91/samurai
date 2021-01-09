import React from 'react'
import style from './ErrorPage.module.css'

const ErrorPage: React.FC = () => {

    return (
        <div className={style.errorPage}>
            <h1>404</h1>
            <hr/>
            <h2>This page could not be found</h2>
        </div>
    )
}
export default ErrorPage