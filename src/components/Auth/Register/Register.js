import React, { useState } from "react";
import { withRouter } from "react-router";
import css from "./Register.less";

const Register = ({
    password,
    setPassword,
    login,
    setLogin,
    errorText,
    setErrorText,
    history
}) => {
    //validation
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        if (repeatPassword === password) {
            setErrorText("");
            localStorage.setItem(
                "user",
                JSON.stringify({
                    login: login,
                    password: password,
                    date: Date.now()
                })
            );
            history.push("/main");
        } else {
            setErrorText("Password don't match. Please try again!");
        }

        if (user && user.login === login) {
            setErrorText("This login already exists. Please login.");
        }

        if (!login) {
            setErrorText("Enter login!");
        } else if (!password) {
            setErrorText("Enter password!");
        }
    };

    return (
        <div className={css.register}>
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    className={css.input}
                    type="password"
                    name="repeat-password"
                    placeholder="Repeat password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                />
                <div className={css.errorText}>{errorText}</div>
                <input className={css.submit} type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default withRouter(Register);
