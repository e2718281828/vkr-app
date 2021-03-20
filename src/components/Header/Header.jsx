import React from 'react';
import {NavLink} from "react-router-dom";
import search from "./../../img/search.svg";
import bell from "./../../img/bell.svg";
import exit from "./../../img/exit.svg";
import user from "./../../img/user.svg";
import Styles from "./Header.module.css";

const Header = () => {
    return (
      <header className={Styles.nav}>
          <div className={Styles.leftBlock}>
            <div className={Styles.brand}>
              <NavLink className={Styles.headerLink} to="/app/list-of-apps-on-assessment">Dynamic 365</NavLink>
            </div>
            
            <div className={Styles.searchBar}>
              <img src={search} className={Styles.searchImg}/>
              <input type="text" className={Styles.searchInput} placeholder="Для поиска по номеру заявки начинайте с символа #" />
            </div>
          </div>

          <div className={Styles.userActions}>
              <NavLink className={Styles.headerLink} to="/app/notifications" className={Styles.notifications}>
                <img src={bell} />
              </NavLink>

              <NavLink className={Styles.headerLink} to="../login">
                <img src={exit} />
              </NavLink>

              <NavLink className={Styles.headerLink} to="/app/personal-page">
                <span className={Styles.username}>Имя Пользователя</span>
                <img src={user} className={Styles.userImg}/>
              </NavLink>
            </div>
      </header>
    )
}

export default Header;

