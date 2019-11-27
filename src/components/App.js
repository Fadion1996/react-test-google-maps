import React, {useState, useEffect} from "react";
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

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        user && setIsLogged(true);
    },[]);

    return (
        <Router>
            <div className={css.app}>
                <Route exact path="/" component={AuthPage} />
                <Route exact path="/main" component={MainPage} />
                <Route exact path="/aboutus" component={AboutUsPage} />
                <Route render={() => <Redirect to={!isLogged ? "/" : '/main'} />} />
            </div>
        </Router>
    );
};

export default App;
