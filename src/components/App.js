import React, { Component } from "react";
import Main from "./Main/Main";
import AuthPage from "./Auth/Auth";
import css from "./App.less";

class App extends Component {
    render() {
        return (
            <div className={css.app}>
                <AuthPage />
            </div>
        );
    }
}

export default App;
