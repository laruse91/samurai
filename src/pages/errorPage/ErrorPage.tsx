import React from 'react'
import style from './ErrorPage.module.css'
import {Result} from 'antd'
import {Button} from '../../components/common/button/Button'
import {useHistory} from 'react-router-dom'

const ErrorPage: React.FC = () => {
    const history = useHistory()
    const onButtonClick = () => {
        history.push('/')
    }

    return (
        <div className={style.errorPage}>
            <Result
                className={style.error}
                status='404'
                title='404'
                subTitle='Sorry, the page you visited does not exist.'
                extra={<Button onClick={onButtonClick} button='Back Home' type='primary'/>}
            />
        </div>

    )
}
export default ErrorPage


// <div className={style.errorPage}>
//     <div className={style.error}>
//     <h1>404</h1>
// <p>This page could not be found</p>
// </div>
// </div>
