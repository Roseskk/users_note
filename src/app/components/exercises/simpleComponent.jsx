import React, {useEffect, useState} from 'react';

const SimpleComponent = ({isAuth, onLogin, onLogout}) => {
    // const [authProvider, setAuthProvider] = useState(isAuth === null)

    return(
        <>
            {
                isAuth === null
                ? <button onClick={() => onLogin()}>Войти</button>
                : <button onClick={() => onLogout()}>Выйти из системы</button>
            }
        </>
    )
}

export default SimpleComponent;