import React from "react";
import {sideBarMenu} from '../../../config/sidebar-menu';
import css from "./LeftSideBar.less";

const LeftSideBar = () => {

    return (
        <ul className={css.leftSideBar}>
            {
                sideBarMenu.map((item, id) => {
                    return (
                        <li className={css.item} key={id}>
                            <p>{item}</p>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default LeftSideBar;
