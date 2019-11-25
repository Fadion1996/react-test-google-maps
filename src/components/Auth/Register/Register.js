import React, { useState, useEffect } from "react";
import css from "./Register.less";

const Register = ({
    password,
    setPassword,
    login,
    setLogin,
    errorText,
    setErrorText
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

            console.log(user.login === login);
        } else {
            setErrorText("Password don't match. Please try again!");
        }

        if (user.login === login) {
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
            <h1 className={css.title}>Register</h1>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    placeholder="login"
                    type="text"
                    name="ogin"
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

export default Register;
