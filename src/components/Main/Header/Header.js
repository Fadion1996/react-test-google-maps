import React from "react";
import { withRouter } from "react-router";
import { Person } from "@material-ui/icons/";
import css from "./Header.less";

const Header = ({ user: { login }, history }) => {
    return (
        <div className={css.header}>
            <div className={css.login}>
                <Person />
                {login}
            </div>
            <div
                className={css.logout}
                onClick={() => {
                    localStorage.clear();
                    history.push("/");
                }}
            >
                Log out
            </div>
        </div>
    );
};

export default withRouter(Header);
