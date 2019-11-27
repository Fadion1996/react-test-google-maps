import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import {apiKey} from '../../config/config-vars'
import {Map, GoogleApiWrapper} from 'google-maps-react';
import css from "./Main.less";

const MainPage = ({google}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    return (
        <div className={css.main}>
            <Header user={user} />
            <div className={css.leftSideBar}>SideBar</div>
            <Map
                google={google}
                zoom={8}
                className={css.mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: apiKey
})(MainPage);
