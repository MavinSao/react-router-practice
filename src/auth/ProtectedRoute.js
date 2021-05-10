import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import auth from './auth'
function ProtectedRoute(props) {

    const { component: Component, ...rest } = props

    console.log(auth.isAuth());

    return (
        <Route
            {...rest}
            render={
                props => {
                    if (auth.isAuth()) {
                        return <Component {...props} />
                    } else {
                        return <Redirect
                            to="/auth"
                        />
                    }
                }
            }
        />
    )
}

export default ProtectedRoute
