import React, { Component } from 'react';
import s from './../Application.module.css';
import show from "./../../../../img/show.svg";
import hide from "./../../../../img/hide.svg";
import pin from "./../../../../img/pin.svg";


class Reply extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            manager: props.manager,
            commentAttachedFiles: false,
            replys: props.replys,
        }
    }

    commentAttachedFiles = () => {
        this.setState({
            commentAttachedFiles: !this.state.commentAttachedFiles
        });
    }

    render() {

        const { user, comment, commentDate } = this.state.replys;

        // let role = "";

        // if (this.state.manager === true) {
        //     role = "Менеджер"
        // } else {
        //     role = "Исполнитель"
        // }

        if (comment != "") {
            return (
                <div className={s.replyComment}>
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

                    </div>

                    {
                        this.state.commentAttachedFiles &&
                        <div>
                            <div className={s.file}>
                                <div className={s.fileImgCont}>
                                    <img src={pin} className={s.fileImg} />
                                </div>
                                <a className={s.download} >Документация_к_работе.pdf</a>
                            </div>
                            <input className={s.input} type="text" placeholder="Нет комментария" />
                        </div>
                    }

                </div>
            )
        } else {
            return null
        }

    }

}

export default Reply;