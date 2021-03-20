import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import s from "./List-of-apps.module.css";
import del from "./../../../img/delete.svg";

class ApplicationDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }
    handleClick = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    render() {
        return (
            <article className={s.app}>
                <div className={s.title}>Краткое описание</div>
                <div className={s.info}>
                    <span className={s.id}>#4</span>
                    <span className={s.date}>31 октября, 14:14</span>
                </div>
                <div className={s.text}>
                    Информационно-аналитическая система экологического мониторинга (ИАСЭМ) предназначена для автоматизации
                    процесса сбора, хранения, обработки и представления информации...
                </div>
                <div className={s.actions}>
                    <NavLink className={s.btn, s.btnGreen} to="/app/application-info">
                        <span className={s.btnSpan}>Подробнее</span>
                    </NavLink>
                    <button className={s.submitReject} onClick={this.handleClick}>Отклонить</button>
                    {
                        this.state.editMode &&
                        <div className={s.rejectConfContainer}>
                            <div className={s.rejectConf}>
                                <div className={s.rejectItem}>
                                    <span className={s.rejectSure}>Вы уверены?</span>
                                    <button className={s.rejectClose} onClick={this.handleClick}><img src={del} /></button>
                                </div>

                                <div className={s.rejectItem}>
                                    <button className={s.rejectYes} onClick={this.handleClick}>Да</button>
                                    <button className={s.rejectNo} onClick={this.handleClick}>Нет</button>
                                </div>
                            </div>
                        </div>
                    }


                </div>
            </article>
        )
    }
}

export default ApplicationDemo;