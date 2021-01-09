import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {TGlobalState} from '../redux/redux-store'

const mapStateToProps = (state: TGlobalState) => ({
    isAuth: state.auth.isAuth,
})
type TStateProps = { isAuth: boolean }

//WCP is props of Wrapped Component
export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return connect<TStateProps, {}, WCP, TGlobalState>(mapStateToProps)((props: TStateProps) => {
        const {isAuth, ...restProps} = props
        if (!isAuth)
            return <Redirect to='/login'/>
        return (
            <WrappedComponent {...restProps as WCP} />
        )
    })
}
