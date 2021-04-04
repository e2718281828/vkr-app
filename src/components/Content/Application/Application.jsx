import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import s from "./Application.module.css";
import show from "./../../../img/show.svg";
import hide from "./../../../img/hide.svg";
import pin from "./../../../img/pin.svg";
import del from "./../../../img/delete.svg";
import { Route } from "react-router-dom";

class Application extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            editModeComments: true,
            showHideAttachedFiles: true,
        }
    }

    handleClick = () => {
        this.setState({
            showHideAttachedFiles: !this.state.showHideAttachedFiles
        });
    }

    showHideAttachedFiles = () => {
        this.setState({
            showHideAttachedFiles: !this.state.showHideAttachedFiles
        });
    }
    render() {
        const {id, title, date, text, main_idea, work_type, data, prefer_date} = this.state.data

        return (
            <div classs={s.applicatonContainer}>
                <div className={s.title}>
                    Список заявок / Заявка <span className={s.number}>#{id}</span>
                    <span className={s.titleStatus}>(новая)</span>
                </div>

                <div className={s.subtitle}>
                    {title}
                </div>

                <div className={s.date}>
                   {date}
                </div>

                <article className={s.info}>
                    <ul>
                        <li className={s.li}>
                            <span className={s.item}>Основная идея: </span>
                            <span> Lorem ipsum dolor sit amet.</span>
                        </li>
                        <li className={s.li}>
                            <span className={s.item}>Вид работы: </span>
                            <span> Lorem ipsum dolor sit amet.</span>
                        </li>
                        <li className={s.li}>
                            <span className={s.item}>Основная идея: </span>
                            <span> Lorem ipsum dolor sit amet.</span>
                        </li>
                        <li className={s.li}>
                            <span className={s.item}>Основная идея: </span>
                            <span> Lorem ipsum dolor sit amet.</span>
                        </li>
                        <li className={s.li}>
                            <span className={s.item}>Исходные данные и требования: </span>

                            <span> Lorem ipsum dolor sit amet.</span>
                        </li>
                        <li className={s.li}>
                            <span className={s.item}>Желаемый срок: </span>
                            <span> Lorem ipsum dolor sit amet.</span>
                        </li>
                    </ul>
                </article>

                <div className={s.attachedFiles}>
                    <button className={s.showHideAttachedFiles} onClick={this.showHideAttachedFiles}>
                        <span>Загружено файлов: 29</span>
                        {
                            this.state.showHideAttachedFiles &&
                            <img src={hide} className={s.img} />
                        } {
                            !this.state.showHideAttachedFiles &&
                            <img src={show} className={s.img} />
                        }
                    </button>

                    {
                        this.state.showHideAttachedFiles &&
                        <div className={s.files}>
                            <div className={s.file}>
                                <img src={pin} />
                                <span>Документация_к_работе.pdf</span>
                                <img src={del} />
                                <input type="text" placeholder="Нет комментария" />
                            </div>
                            <div className={s.file}>
                                <img src={pin} />
                                <span>Вопросы_к_работе №1.docx</span>
                                <img src={del} />
                                <input type="text" placeholder="Нет комментария" />
                            </div>
                        </div>
                    }
                    
                </div>

                <div className={s.commentsContainer}>
                    <button className={s.openCloseComments}>
                        <span>Комментарии</span>
                        <img src={hide} className={s.hideBS} />
                        <img src={show} className={s.showBS} />
                    </button>
                    {
                        this.state.editModeComments &&
                        <div className={s.comments}>
                            <button>
                                <img src="" alt="" />
                                <span>Задать вопрос</span>
                            </button>

                            <div className={s.comment}>
                                Какие исходные данные и требования? В случае превышения лимитов процессы, вызывающие перегрузку, могут быть отключены? Какие исходные данные и требования? В случае превышения лимитов процессы, вызывающие перегрузку, могут быть отключены?
                            </div>
                        </div>
                    }

                </div>
            </div>
        )
    }
}

export default Application;