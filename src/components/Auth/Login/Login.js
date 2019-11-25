import React from "react";
import css from "./Login.less";

const Login = ({ login, setLogin, password, setPassword, errorText }) => {
    // const handleSubmit = () => {
    //     localStorage.setItem('login', login);
    //     localStorage.setItem('password', password);
    //     console.log("Login with new ", login, "password: ", password);
    // };

    return (
        <div className={css.login}>
            <h1 className={css.title}>Login</h1>
            <form className={css.form}>
                <input
                    className={css.input}
                    placeholder="Login"
                    type="text"
                    name="login"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <input
                    className={css.input}
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <div className={css.errorText} value={errorText} />
                <input className={css.submit} type="submit" value="Submit" />
            </form>

            <div className={css.errorText} />
        </div>
    );
};

export default Login;
