import React, { Component } from 'react';
import s from "./Application.module.css";
import show from "./../../../img/show.svg";
import hide from "./../../../img/hide.svg";
import pin from "./../../../img/pin.svg";
import add from "./../../../img/add.svg";
import close from "./../../../img/delete.svg";
import Comment from "./Comment-&-reply/Comment.jsx";

class Application extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            manager: props.manager,
            data: props.data,
            showHideComments: true,
            showHideAttachedFiles: true,
            takePopUp: false,
            askAQuestion: false,
            comments: props.data.comments,
            commentBody: ""
        }
    }

    onCommentChange = (event) => {
        this.setState({ commentBody: event.target.value })
    }


    showHideComments = () => {
        this.setState({
            showHideComments: !this.state.showHideComments
        })
    }

    showHideAttachedFiles = () => {
        this.setState({
            showHideAttachedFiles: !this.state.showHideAttachedFiles
        })
    }

    askAQuestion = () => {
        this.setState({
            askAQuestion: !this.state.askAQuestion,
            commentBody: ''
        })
    }

    role = () => {
        if (this.state.manager === true) {
            return "Менеджер"
        } else {
            return "Исполнитель"
        }
    }

    sendComment = () => {
        const newComment = {
            user: this.role(),
            commentDate: "12.11.2020, 15:30",
            comment: this.state.commentBody,
            replys: []
        }

        this.setState({
            askAQuestion: !this.state.askAQuestion,
            commentBody: '',
            comments: this.state.comments.concat(newComment)
        })
    }

    takePopUp = () => {
        this.setState({
            takePopUp: !this.state.takePopUp,
            rejectPopUp: false
        })
    }

    rejectPopUp = () => {
        this.setState({
            rejectPopUp: !this.state.rejectPopUp,
            takePopUp: false
        })
    }

    render() {

        const { id, title, date, text, main_idea, work_type, data, prefer_date } = this.state.data;
        
        const comments = this.state.comments;

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
                            <span> {main_idea} </span>
                        </li>
                        <li className={s.li}>
                            <span className={s.item}>Вид работы: </span>
                            <span> {work_type} </span>
                        </li>
                        <li className={s.li}>
                            <span className={s.item}>Тип работы: </span>
                            <span> {work_type} </span>
                        </li>
                        <li className={s.li}>
                            <span className={s.item}>Исходные данные и требования: </span>
                            <span> {data} </span>
                        </li>
                        <li className={s.li}>
                            <span className={s.item}>Желаемый срок: </span>
                            <span> {prefer_date} </span>
                        </li>
                    </ul>
                </article>

                <div className={s.attachedFiles}>
                    <button className={s.attachedFiles} onClick={this.showHideAttachedFiles}>
                        <span>Загруженые файлы</span>
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
                            <div>
                                <div className={s.file}>
                                    <div className={s.fileImgCont}>
                                        <img src={pin} className={s.fileImg} />
                                    </div>
                                    <a className={s.download} >Документация_к_работе.pdf</a>
                                </div>
                                <input className={s.input} type="text" placeholder="Нет комментария" />
                            </div>

                            <div>
                                <div className={s.file}>
                                    <div className={s.fileImgCont}>
                                        <img src={pin} className={s.fileImg} />
                                    </div>
                                    <a className={s.download} >Документация_к_работе.pdf</a>
                                </div>
                                <input className={s.input} type="text" placeholder="Нет комментария" />
                            </div>
                        </div>
                    }

                </div>

                <div className={s.commentsContainer}>
                    <button className={s.showHideComments} onClick={this.showHideComments}>
                        <span>Комментарии</span>
                        {
                            this.state.showHideComments &&
                            <img src={hide} className={s.imgBS} />
                        }
                        {
                            !this.state.showHideComments &&
                            <img src={show} className={s.imgBS} />
                        }
                    </button>
                    {
                        this.state.showHideComments &&
                        <div className={s.comments}>
                            <button className={s.ask} onClick={this.askAQuestion}>
                                <img src={add} />
                                <span className={s.askText}>Задать вопрос или оставить комментарий</span>
                            </button>

                            {
                                this.state.askAQuestion &&
                                <div className={s.replyInputCont}>
                                    <textarea
                                        className={s.replyInput}
                                        placeholder="Введите комментарий"
                                        value={this.state.commentBody}
                                        onChange={this.onCommentChange}
                                    >
                                    </textarea>

                                    <div className={s.underReply}>
                                        <div className={s.replyFileCont}>
                                            <label className={s.replyFileLabel}>
                                                <img src={pin} className={s.replyFileImg} />
                                                <span className={s.replyFileTxt}>Прикрепить файлы</span>
                                                <input className={s.replyFile} type="file" />
                                            </label>
                                        </div>

                                        <button className={s.sendBtn} onClick={this.sendComment}>Отправить</button>
                                    </div>

                                    <div>
                                        <div className={s.file}>
                                            <div className={s.fileImgCont}>
                                                <img src={pin} className={s.fileImg} />
                                            </div>
                                            <a className={s.download} >Документация_к_работе.pdf</a>
                                        </div>
                                        <input className={s.input} type="text" placeholder="Нет комментария" />
                                    </div>

                                </div>
                            }

                            {
                                comments.map(item => (
                                    <div>
                                        <Comment manager={this.state.manager} comments={item} />
                                    </div>
                                ))}
                        </div>
                    }

                </div>

                <div className={s.takeToWork}>
                    <div className={s.takeToWorkTitle}>
                        Взять в работу?
                    </div>

                    <div className={s.btns}>
                        <div className={s.btnTake}>
                            <button className={s.btnGreen} onClick={this.takePopUp} >Принять</button>
                            {
                                this.state.takePopUp &&
                                <div className={s.takePopUp}>
                                    <div className={s.popUpTop}>
                                        <div className={s.popUpTitle}>Вы уверены?</div>
                                        <button className={s.popUpClose}><img className={s.popUpCloseImg} onClick={this.takePopUp} src={close} /></button>
                                    </div>

                                    <div className={s.popUpBottom}>
                                        <button className={s.btnGreenSmall} onClick={this.takePopUp}>Да</button>
                                        <button className={s.btnRedSmall} onClick={this.takePopUp}>Нет</button>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className={s.btnReject}>
                            <button className={s.btnRed} onClick={this.rejectPopUp}>Отклонить</button>
                            {
                                this.state.rejectPopUp &&
                                <div className={s.rejectPopUp}>
                                    <div className={s.popUpTop}>
                                        <div className={s.popUpTitle}>Вы уверены?</div>
                                        <button className={s.popUpClose}><img className={s.popUpCloseImg} onClick={this.rejectPopUp} src={close} /></button>
                                    </div>

                                    <div className={s.popUpBottom}>
                                        <button className={s.btnGreenSmall} onClick={this.rejectPopUp}>Да</button>
                                        <button className={s.btnRedSmall} onClick={this.rejectPopUp}>Нет</button>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Application;
