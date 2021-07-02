import React from 'react';
import s from './Login.module.css';
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className={s.main}>
            <div className={s.ellipse}></div>
            <div className={s.form}>
                <h1 className={s.title}>Dynamics 365</h1>
                <form action="">
                    <div className={s.subtitle1}>Авторизация</div>
                    <div className={s.subtitle2}>Введите E-mail и пароль</div>
                    <div className={s.formGroup}>
                        <label className={s.inputContainer}>
                            <input type="email" className={s.input} placeholder="admin@dynamics365.com" />
                        </label>
                    </div>
                    <div className={s.formGroup}>
                        <label className={s.inputContainer}>
                            <input type="password" className={s.input} placeholder="********" />
                            <NavLink to="/reset" className={s.a} >Ввостановить пароль</NavLink>
                        </label>
                    </div>
                    <button className={s.btn} type="submit">
                        <span className={s.span}>Войти</span>
                    </button>


                </form>
            </div>
        </div>
    )
}

export default Login;