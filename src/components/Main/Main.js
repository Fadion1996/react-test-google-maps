import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import css from "./Main.less";

const MainPage = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem("user")));
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    return (
        <div className={css.main}>
            <Header user={user} />
            <div className={css.leftSideBar}>SideBar</div>
        </div>
    );
};

export default MainPage;
