import React, { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

import css from "./Auth.less";

const AuthPage = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("");

    return (
        <div className={css.auth}>
            <div className={css.tabs}>
                <div className={css.login}>Login</div>
                <div className={css.sign_up}>Sign up</div>
            </div>
            {isLogged ? (
                <Login
                    login={login}
                    setLogin={setLogin}
                    password={password}
                    setPassword={setPassword}
                    errorText={errorText}
                />
            ) : (
                <Register
                    login={login}
                    setLogin={setLogin}
                    password={password}
                    setPassword={setPassword}
                    errorText={errorText}
                    setErrorText={setErrorText}
                />
            )}
        </div>
    );
};

export default AuthPage;
