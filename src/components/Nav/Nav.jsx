import React from 'react';
import { NavLink } from "react-router-dom";
import Styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav>
            <div className={Styles.title}>
                Заявки
            </div>
            <div>
                <div className={Styles.statusNav}>
                    <NavLink className={Styles.statusLink} activeClassName={Styles.activeLink} to="/app/list-of-apps-on-assessment" >
                        <div className={Styles.statusTick}></div>
                        <span className={Styles.statusText}>На оценке</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink className={Styles.statusLink} activeClassName={Styles.activeLink} to="/app/list-of-apps-in-work">
                        <div className={Styles.statusClock}></div>
                        <span className={Styles.statusText}>В работе</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav;