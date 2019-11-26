import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import MainPage from "./Main/Main";
import AuthPage from "./Auth/Auth";
import AboutUsPage from "./AboutUs/AboutUs";
import css from "./App.less";

const App = () => {
    return (
        <Router>
            <div className={css.app}>
                <Route exact path="/" component={AuthPage} />
                <Route exact path="/main" component={MainPage} />
                <Route exact path="/aboutus" component={AboutUsPage} />
                <Route render={() => <Redirect to="/" />} />
            </div>
        </Router>
    );
};

export default App;
