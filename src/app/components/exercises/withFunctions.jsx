import React from 'react';
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem('auth')

    const onLogin = () => {
        localStorage.setItem('auth','Привет мир!')
        window.location.reload()
    }
    const onLogout = () => {
        localStorage.removeItem('auth')
        window.location.reload()
    }
    return (
        <CardWrapper>
            <Component {...props} isAuth={isAuth} onLogin={onLogin} onLogout={onLogout} />
        </CardWrapper>
    )
}


export default withFunctions;