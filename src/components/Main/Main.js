import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import {apiKey} from '../../config/config-vars'
import {Map, GoogleApiWrapper} from 'google-maps-react';
import css from "./Main.less";
import LeftSideBar from "./LeftSideBar/LeftSideBar";

const MainPage = ({google}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    return (
        <div className={css.main}>
            <Header user={user} />
            <LeftSideBar/>
            <Map
                google={google}
                zoom={8}
                className={css.mapStyles}
                initialCenter={{ lat: 50.4021702, lng: 30.3926086}}
            />
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: apiKey
})(MainPage);
