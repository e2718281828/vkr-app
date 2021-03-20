import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import s from "./Application.module.css";
import show from "./../../../img/show.svg";
import hide from "./../../../img/hide.svg";
import pin from "./../../../img/pin.svg";
import del from "./../../../img/delete.svg";


class Application extends React.Component {
    render() {
        return (
            <div classs={s.applicatonContainer}>
                <div className={s.title}>
                    Список заявок / Заявка <span className={s.number}>#4</span>
                </div>

                <div className={s.subtitle}>
                    Тема: Политика безопасности в типовом учреждении УИС
                </div>

                <div className={s.date}>
                    31 октября, 14:14
                </div>

                <article>
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
                    <button>
                        <span>Загружено файлов: 29</span>
                        <img src={hide} />
                        <img src={show} />
                    </button>

                    <div className={s.files}>
                        <div className={s.file}>
                            <img src={pin} />
                        </div>
                        <span>Документация_к_работе.pdf</span>
                        <img src={del} />
                        <input type="text" placeholder="Нет комментария" />
                    </div>

                    <div className={s.files}>
                        <div className={s.file}>
                            <img src={pin} />
                        </div>
                        <span>Вопросы_к_работе №1.docx</span>
                        <img src={del} />
                        <input type="text" placeholder="Нет комментария" />
                    </div>
                </div>

                <div className={s.comments}>
                    
                </div>
            </div>
        )
    }
}

export default Application;