import React from 'react';
import { NavLink } from "react-router-dom";
import s from "./List-of-apps.module.css";
import Styles from "./List-of-apps.module.css";
import arrowLgray from "./../../../img/arrowLgray.svg";
import arrowRgreen from "./../../../img/arrowRgreen.svg";
import del from "./../../../img/delete.svg";
import confirm from "./../../../img/confirm.svg";
import discard from "./../../../img/delete.svg";
import filter from "./../../../img/filter.svg";
import add from "./../../../img/add.svg";
import pin from "./../../../img/pin.svg";
import ApplicationPreview from './ApplicationPreview';

class ListOfAppsOnAssessment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            manager: props.manager,
            editModeNewApp: false,
            editModeFilter: false,
            error: null,
            isLoaded: false,
            inputBody: "",
            applications: [],
        }
    }

    componentDidMount() {
        fetch("http://localhost:3030/applications")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        applications: result,
                        isLoaded: true
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    showHideNewApp = () => {
        this.setState({
            editModeNewApp: !this.state.editModeNewApp,
        });
    }

    showHideFilter = () => {
        this.setState({
            editModeFilter: !this.state.editModeFilter,
        });
    }

    hideFilter = () => {
        this.setState({
            editModeFilter: false
        })
    }

    onFilterChange = (event) => {

    }

    render() {
        const { isLoaded, error, applications } = this.state;

        const workTypes = {};

        for (let i=0; i < applications.length; i++) {
            workTypes[i] = applications[i].work_type; 
        }

        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        }

        return (
            <div>
                <div className={Styles.mainTitle}>

                    {
                        this.state.manager &&

                        <button className={s.btnAdd} onClick={this.showHideNewApp}>
                            <span className={s.new}>Новая</span>
                            <img src={add} className={s.add} />
                        </button>
                    }

                    {
                        this.state.editModeNewApp &&

                        <div>
                            <div className={s.newAppShadow} id="newAppShadow"></div>

                            <div className={s.newAppContainer} id="newApp">
                                <form action="">
                                    <div className={s.newApp}>
                                        <div className={s.newTitleContainer}>
                                            <div className={s.newTitle}>Новая заявка</div>
                                            <button className={s.newRejectClose} onClick={this.showHideNewApp}><img src={del} className={s.newCloseImg} /></button>
                                        </div>

                                        <div className={s.newSubtitle}>Заявка будет отправлена на оценку</div>
                                        <div>
                                            <div className={s.newItem}>
                                                <div className={s.newText}>Имя</div>
                                                <input className={s.newInput} type="text" placeholder="Введите имя" />
                                            </div>
                                            <div className={s.newItem}>
                                                <div className={s.newText}>Телефон для звонков</div>
                                                <input className={s.newInput} type="text" placeholder="+7 999 888 77 66" />
                                            </div>
                                            <div className={s.newItem}>
                                                <div className={s.newText}>WhatsApp</div>
                                                <input className={s.newInput} type="text" placeholder="+7 999 888 77 66" />
                                            </div>
                                            <div className={s.newItem}>
                                                <div className={s.newText}>E-mail</div>
                                                <input className={s.newInput} type="text" placeholder="name@info.com" />
                                            </div>
                                            <div>
                                                <div className={s.newText}>Тип работы</div>
                                                <select className={s.select}>
                                                    <option selected="selected">Выберите тип работы</option>
                                                    <option>Первый тип работ</option>
                                                    <option>Второй тип работ</option>
                                                    <option>Третий тип работ</option>
                                                    <option>Четвертый тип работ</option>
                                                </select>
                                            </div>
                                            <div className={s.newItem}>
                                                <div className={s.newText}>Основная идея</div>
                                                <input className={s.newInput} type="text" placeholder="Введите название" />
                                            </div>
                                            <div className={s.newItem}>
                                                <div className={s.newText}>Исходные данные и требования</div>
                                                <textarea className={s.textarea} cols="30" rows="10" placeholder="Введите текст"></textarea>
                                            </div>
                                            <div className={s.pin}>
                                                <label className={s.pinLabel} >
                                                    <input type="file" className={s.inputFile} />
                                                    <img src={pin} className={s.pinImg} />
                                                    <span className={s.attachFile}>Прикрепить файлы</span>
                                                </label>
                                            </div>
                                            <div className={s.newItem}>
                                                <div className={s.attachedFile}>
                                                    <div className={s.newImg}><img className={s.attachedPpinImg} src={pin} alt="" /></div>
                                                    <a className={s.newDownload} type="download">Документ.txt</a>
                                                </div>
                                                <div>
                                                    <input className={s.newInput} type="text" placeholder="Введите коментарий к файлу" />
                                                </div>
                                            </div>
                                            <div className={s.newItem}>
                                                <div className={s.newText}>Желаемый срок</div>
                                                <input className={s.newInput} type="date" name="" id=""></input>
                                            </div>
                                            <div className={s.newItem}>
                                                <button className={s.btnGreen} onClick={this.showHideNewApp}>Создать</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    }

                    <div className={Styles.title}>Список заявок</div>

                    {
                        !this.state.manager &&

                        <ul className={Styles.subtitles}>
                            <li className={Styles.subtitle}>
                                <NavLink to="#" className={Styles.a}>Новые</NavLink>
                            </li>
                            <li className={Styles.subtitle}>
                                <NavLink to="#" className={Styles.a}>Оцененные</NavLink>
                            </li>
                            <li className={Styles.subtitle}>
                                <NavLink to="#" className={Styles.a}>Отклоненные</NavLink>
                            </li>
                        </ul>

                    }

                    {
                        this.state.manager &&

                        <ul className={Styles.subtitles}>
                            <li className={Styles.subtitle}>
                                <NavLink to="#" className={Styles.a}>На оценке</NavLink>
                            </li>
                            <li className={Styles.subtitle}>
                                <NavLink to="#" className={Styles.a}>Есть вопросы</NavLink>
                            </li>
                            <li className={Styles.subtitle}>
                                <NavLink to="#" className={Styles.a}>Оцененные</NavLink>
                            </li>
                        </ul>

                    }


                    <div className={Styles.filter}>
                        <button className={Styles.openFilter} onClick={this.showHideFilter} >
                            <img src={filter} className={Styles.img} />
                            Фильтр по типу работ
                        </button>

                        <div className={Styles.filterButtons}>
                            <button className={Styles.filterButton} onClick={this.hideFilter}>
                                <img src={confirm} className={Styles.img} />
                                Подтвердить
                            </button>
                            <button to="#" className={Styles.filterButton} onClick={this.hideFilter}>
                                <img src={discard} className={Styles.img} />
                                Сбросить
                            </button>
                        </div>

                        {
                            this.state.editModeFilter &&

                            <div className={Styles.list} id="list">
                                <ul className={Styles.ul}>
                                    <label className={Styles.label}>
                                        <li className={Styles.li}>
                                            <div>Первый тип работ</div>
                                            <input type="checkbox" className={Styles.checkbox} value="1" />
                                            <div className={Styles.fakeCheckbox}></div>
                                        </li>
                                    </label>
                                    <label className={Styles.label}>
                                        <li className={Styles.li}>
                                            <div>Второй тип работ</div>
                                            <input type="checkbox" className={Styles.checkbox} value="2" />
                                            <div className={Styles.fakeCheckbox}></div>
                                        </li>
                                    </label>
                                    <label className={Styles.label}>
                                        <li className={Styles.li}>
                                            <div>Третий тип работ</div>
                                            <input type="checkbox" className={Styles.checkbox} value="3" />
                                            <div className={Styles.fakeCheckbox}></div>
                                        </li>
                                    </label>
                                    <label className={Styles.label}>
                                        <li className={Styles.li}>
                                            <div>Четвертый тип работ</div>
                                            <input type="checkbox" className={Styles.checkbox} value="4" />
                                            <div className={Styles.fakeCheckbox}></div>
                                        </li>
                                    </label>
                                    <label className={Styles.label}>
                                        <li className={Styles.li}>
                                            <div>Пятый тип работ</div>
                                            <input type="checkbox" className={Styles.checkbox} value="5" />
                                            <div className={Styles.fakeCheckbox}></div>
                                        </li>
                                    </label>
                                    <label className={Styles.label}>
                                        <li className={Styles.li}>
                                            <div>Шестой тип работ</div>
                                            <input type="checkbox" className={Styles.checkbox} value="6" />
                                            <div className={Styles.fakeCheckbox}></div>
                                        </li>
                                    </label>
                                    <label className={Styles.label}>
                                        <li className={Styles.li}>
                                            <div>Шестой тип работ</div>
                                            <input type="checkbox" className={Styles.checkbox} value="7" />
                                            <div className={Styles.fakeCheckbox}></div>
                                        </li>
                                    </label>
                                    <label className={Styles.label}>
                                        <li className={Styles.li}>
                                            <div>Шестой тип работ</div>
                                            <input type="checkbox" className={Styles.checkbox} value="8" />
                                            <div className={Styles.fakeCheckbox}></div>
                                        </li>
                                    </label>
                                    <label className={Styles.label}>
                                        <li className={Styles.li}>
                                            <div>Шестой тип работ</div>
                                            <input type="checkbox" className={Styles.checkbox} value="9" />
                                            <div className={Styles.fakeCheckbox}></div>
                                        </li>
                                    </label>
                                    <label className={Styles.label}>
                                        <li className={Styles.li}>
                                            <div>Шестой тип работ</div>
                                            <input type="checkbox" className={Styles.checkbox} value="10" />
                                            <div className={Styles.fakeCheckbox}></div>
                                        </li>
                                    </label>
                                </ul>
                            </div>
                        }

                    </div>
                </div>
                <div className={s.appContainer}>
                    {applications.map(item => (
                        <div>
                            <ApplicationPreview data={item} />
                        </div>
                    ))}
                </div>


                <div className={s.paginationContainer}>
                    <ul className={s.pagination}>
                        <li className={s.item}>
                            <img src={arrowLgray} alt="" />
                        </li>
                        <li className={s.active}>
                            <NavLink className={s.activeA} to="#">1</NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink className={s.a} to="#">2</NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink className={s.a} to="#">3</NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink className={s.a} to="#">..</NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink className={s.a} to="#">24</NavLink>
                        </li>
                        <li className={s.item}>
                            <img src={arrowRgreen} alt="" />
                        </li>
                    </ul>
                </div>
            </div>

        )
    }


}

export default ListOfAppsOnAssessment;