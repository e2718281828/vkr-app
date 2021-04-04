import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import s from "./List-of-apps.module.css";
import del from "./../../../img/delete.svg";
import { Route } from "react-router-dom";
import Application from "../Application/Application"

class ApplicationDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            editMode: false
        }
    }
    handleClick = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    render() {
        const {id, title, date, text, main_idea, work_type, data, prefer_date} = this.state.data
        const path = '/app/application-info/';

        return (
            <article className={s.app}>
                <div className={s.title}>{title}</div>
                <div className={s.info}>
                    <span className={s.id}>#{id}</span>
                    <span className={s.date}>{date}</span>
                </div>
                <div className={s.text}>
                    {text}
                </div>
                <div className={s.actions}>
                   
                    <NavLink className={s.btn, s.btnGreen} to={path + id}>
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