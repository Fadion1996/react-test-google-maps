import React, {useState} from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

import css from "./Auth.less";

const AuthPage = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("");
    const [tab, setTab] = useState(0);

    return (
        <div className={css.auth}>
            <div className={css.tabs}>
                <div
                    className={css.login}
                    onClick={() => {
                        setErrorText("");
                        setTab(0);
                    }}
                >
                    Login
                </div>
                <div
                    className={css.sign_up}
                    onClick={() => {
                        setErrorText("");
                        setTab(1);
                    }}
                >
                    Sign up
                </div>
            </div>
            {!tab ? (
                <Login
                    login={login}
                    setLogin={setLogin}
                    password={password}
                    setPassword={setPassword}
                    errorText={errorText}
                    setErrorText={setErrorText}
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
