import React from 'react';
import s from './Login.module.css';
import { NavLink } from "react-router-dom";

const Reset = () => {
    return (
        <div className={s.main}>
            <div className={s.ellipse}></div>
            <div className={s.form}>
                <h1 className={s.title}>Dynamics 365</h1>
                <form >
                    <div className={s.subtitle1}>Сброс пароля</div>
                    <div className={s.subtitle2}>Введите E-mail, который вы <br/> указывали при регистрации</div>
                    <div className={s.formGroup}>
                        <label className={s.inputContainer}>
                            <input type="email" className={s.input} placeholder="admin@dynamics365.com"/>
                        </label>
                    </div>
                    <button className={s.btn} type="submit">
                        <span className={s.span}>Отправить</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Reset;