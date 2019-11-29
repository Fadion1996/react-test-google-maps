import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import {apiKey} from '../../config/config-vars'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import css from "./Main.less";
import LeftSideBar from "./LeftSideBar/LeftSideBar";

const MainPage = ({google}) => {
    const [user, setUser] = useState({});
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    const mapClicked = (mapProps, map, clickEvent) => {
        setMarkers(...markers, {lat: map.center.lat(), lng: map.center.lng()})
        // console.log('map', map.center.lat(), map.center.lng());
    };

    console.log(markers);

    const onMarkerClick = (props, marker, event) => {
        console.log('props', props, 'marker', marker, 'event', event);
    };

    return (
        <div className={css.main}>
            <Header user={user} />
            <LeftSideBar/>
            <Map
                google={google}
                zoom={8}
                className={css.mapStyles}
                initialCenter={{ lat: 50.4021702, lng: 30.3926086}}
                onClick={mapClicked}
            >
                {
                    markers.length ?
                        markers.map(marker => (
                            <Marker onClick={onMarkerClick}
                                    position={marker}
                                    name={'location'} />
                            )
                        )
                        : null
                }
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: apiKey
})(MainPage);
