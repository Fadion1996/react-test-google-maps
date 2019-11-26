import React from "react";
import { withRouter } from "react-router";
import css from "./Login.less";

const Login = ({
    history,
    login,
    setLogin,
    password,
    setPassword,
    errorText,
    setErrorText
}) => {
    const handleSubmit = e => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            if (user.login === login && user.password === password) {
                console.log("Welcome ", login, "password: ", password);
                history.push("/main");
            } else {
                setErrorText("Login or password are incorect! Try again.");
            }
        } else {
            setErrorText("Login or password are incorect! Try again.");
        }
    };

    return (
        <div className={css.login}>
            <form className={css.form} onSubmit={handleSubmit}>
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
                <div className={css.errorText}>{errorText}</div>
                <input
                    className={css.submit}
                    onSubmit={handleSubmit}
                    type="submit"
                    value="Submit"
                />
            </form>

            <div className={css.errorText} />
        </div>
    );
};

export default withRouter(Login);
