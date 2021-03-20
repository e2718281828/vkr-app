import React from 'react';
import { NavLink } from "react-router-dom";
import Styles from "./../List-of-apps/List-of-apps.module.css";
import s from "./Personal-page.module.css";

const PersonalPageManager = () => {
    return (
        <div>
            <div className={Styles.mainTitle}>
                <div className={Styles.title}>Личный кабинет</div>
                <ul className={Styles.subtitles}>
                    <li className={Styles.subtitle}>
                        <NavLink to="#" className={Styles.a}>Основное</NavLink>
                    </li>
                    <li className={Styles.subtitle}>
                        <NavLink to="#" className={Styles.a}>Правила работы</NavLink>
                    </li>
                </ul>
            </div>

            <article className={s.main}>
                <div className={s.id}>ID пользователя: 1324</div>
                <div className={s.number}>
                    <div className={s.subtitle}>Ноер телефона WhatsApp</div>
                    <div className={s.inputContainer}>
                        <input className={s.numberInput} type="text" placeholder="+7 987 654-32-10"/>
                    </div>
                </div>

                <div className={s.buttonSave}>
                    <button className={s.button}>Сохранить</button>
                </div>
            </article>
        </div>
    )
} 

export default PersonalPageManager;