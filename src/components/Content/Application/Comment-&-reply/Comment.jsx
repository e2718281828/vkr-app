import React, { Component } from 'react';
import s from './../Application.module.css';
import show from "./../../../../img/show.svg";
import hide from "./../../../../img/hide.svg";
import pin from "./../../../../img/pin.svg";
import Reply from "./Reply.jsx";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manager: props.manager,
            comments: props.comments,
            commentAttachedFiles: false,
            commentReply: false,
            data: props.data,
            commentReplys: props.comments.replys,   
            commentBody: "",
        }
    }

    onCommentChange = (event) => {
        this.setState({ commentBody: event.target.value })
    }

    commentAttachedFiles = () => {
        this.setState({
            commentAttachedFiles: !this.state.commentAttachedFiles
        });
    }

    commentReply = () => {
        this.setState({
            commentReply: !this.state.commentReply
        });
    }

    role = () => {
        if (this.state.manager === true) {
            return "Менеджер"
        } else {
            return "Исполнитель"
        }
    }

    sendComment = () => {
        const newReply = {
            user: this.role(),
            commentDate: "12.11.2020, 15:50",
            comment: this.state.commentBody,
        }

        this.setState({
            commentReply: !this.state.commentReply,
            commentBody: '',
            commentReplys: this.state.commentReplys.concat(newReply)
        })
    }

    render() {
        const { user, comment, commentDate, replys } = this.state.comments;

        const commentReplys = this.state.commentReplys;

        // let role = ""

        // if (this.state.manager === true) {
        //     role = "Менеджер"
        // } else {
        //     role = "Исполнитель"
        // }

        if (comment != "") {
            return (
                <div className={s.comment}>
                    <div className={s.commentDiv}>

                        {/* {
                            !this.state.manager &&
                            <div className={s.commentRole}> {user} </div>
                        }

                        {
                            this.state.manager &&
                            <div className={s.commentRole}> {user} </div>
                        } */}

                        <div className={s.commentRole}> {user} </div>

                        <div className={s.commentDate}> {commentDate} </div>
                    </div>

                    <div className={s.commentText}>
                        {comment}
                    </div>


                    <div className={s.underComment}>
                        <button className={s.attachedFiles} onClick={this.commentAttachedFiles}>
                            <span>Загруженые файлы</span>
                            {
                                this.state.commentAttachedFiles &&
                                <img src={hide} className={s.img} />
                            } {
                                !this.state.commentAttachedFiles &&
                                <img src={show} className={s.img} />
                            }
                        </button>

                        <button className={s.reply} onClick={this.commentReply}>Ответить</button>
                    </div>

                    {
                        this.state.commentAttachedFiles &&
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

                    {
                        this.state.commentReply &&
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

                    {commentReplys.map(item => (
                        <div>
                            <Reply manager={this.state.manager} replys={item} />
                        </div>
                    ))}


                </div>
            )
        }
        else {
            return null
        }


    }

}

export default Comment;