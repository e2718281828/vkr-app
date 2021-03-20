import React from 'react';
import { NavLink } from "react-router-dom";
import Styles from "./../List-of-apps/List-of-apps.module.css";
import arrowLgray from "./../../../img/arrowLgray.svg";
import arrowRgreen from "./../../../img/arrowRgreen.svg";


const Search = () => {
    return (
        <div>
            <div className={Styles.mainTitle}>
                <div className={Styles.title}>Поиск: Безопасность</div>
                <ul className={Styles.subtitles}>
                    <li className={Styles.subtitle}>
                        <NavLink to="#" className={Styles.a}>Все</NavLink>
                    </li>
                    <li className={Styles.subtitle}>
                        <NavLink to="#" className={Styles.a}>Входящие</NavLink>
                    </li>
                    <li className={Styles.subtitle}>
                        <NavLink to="#" className={Styles.a}>В работе</NavLink>
                    </li>
                    <li className={Styles.subtitle}>
                        <NavLink to="#" className={Styles.a}>Комментарии</NavLink>
                    </li>
                </ul>
            </div>
            <div className={Styles.appContainer}>
                <article className={Styles.app}>
                    <div className={Styles.title}>Политика контроля данных в типовом учреждении УИС</div>
                    <div className={Styles.text}>
                        ...информационно-аналитическая система экологического мониторинга (ИАСЭМ) предназначена для автоматизации
                        процесса сбора, хранения, обработки и представления информации...
                    </div>
                    <div className={Styles.actions}>
                        <NavLink className={Styles.btnGreen} to="#">
                            <span className={Styles.btnSpan}>Подробнее</span>
                        </NavLink>
                    </div>
                </article>
            </div>

            <div className={Styles.paginationContainer}>
                <ul className={Styles.pagination}>
                    <li className={Styles.item}>
                        <img src={arrowLgray} alt="" />
                    </li>
                    <li className={Styles.active}>
                        <NavLink className={Styles.activeA} to="#">1</NavLink>
                    </li>
                    <li className={Styles.item}>
                        <NavLink className={Styles.a} to="#">2</NavLink>
                    </li>
                    <li className={Styles.item}>
                        <NavLink className={Styles.a} to="#">3</NavLink>
                    </li>
                    <li className={Styles.item}>
                        <NavLink className={Styles.a} to="#">..</NavLink>
                    </li>
                    <li className={Styles.item}>
                        <NavLink className={Styles.a} to="#">24</NavLink>
                    </li>
                    <li className={Styles.item}>
                        <img src={arrowRgreen} alt="" />
                    </li>

                </ul>
            </div>

        </div>

    )
}

export default Search;