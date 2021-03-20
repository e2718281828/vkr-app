import React from 'react';
import { NavLink } from "react-router-dom";
import Styles from "./../List-of-apps/List-of-apps.module.css";
import s from "./Notifications.module.css";
import arrowLgray from "./../../../img/arrowLgray.svg";
import arrowRgreen from "./../../../img/arrowRgreen.svg";
import chat from "./../../../img/chat.svg";
import money from "./../../../img/money.svg";


const Notifications = () => {
    return (
        <div>
            <div className={Styles.mainTitle}>
                <div className={Styles.title}>Уведомления</div>
                <ul className={Styles.subtitles}>
                    <li className={Styles.subtitle}>
                        <NavLink to="#" className={Styles.a}>Все</NavLink>
                    </li>
                    <li className={Styles.subtitle}>
                        <NavLink to="#" className={Styles.a}>Комментарии</NavLink>
                    </li>
                    <li className={Styles.subtitle}>
                        <NavLink to="#" className={Styles.a}>Оценка</NavLink>
                    </li>
    
                </ul>
            </div>
            <div className={Styles.appContainer}>
                <article className={s.app}>
                    <div className={s.imgContainer}>
                        <img className={s.img} src={chat} />
                    </div>
                    <div>
                        <div>
                            <span className={s.comment}>Новый комментарий</span>
                            <span className={s.number}>в заявке #51</span>
                        </div>
                        <div className={s.date}>
                            31 октября, 14:14
                        </div>
                    </div>
                </article>

                <article className={s.app}>
                    <div className={s.imgContainer}>
                        <img className={s.img} src={money} />
                    </div>
                    <div>
                        <div>
                            <span className={s.comment}>Клиент согласился, требуется подтверждение</span>
                            <span className={s.number}>в заявке #51</span>
                        </div>
                        <div className={s.date}>
                            31 октября, 14:14
                        </div>
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

export default Notifications;