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
import ApplicationDemo from './ApplicationDemo';

const ListOfAppsOnAssessment = () => {

    const showHideFilter = () => {
        let list = document.getElementById("list");
        if (list.style.maxHeight) {
            list.style.maxHeight = null;
        } else {
            list.style.maxHeight = 280 + 'px';
        }
    }

    return (
        <div>
            <div className={Styles.mainTitle}>
                <div className={Styles.title}>Список заявок</div>
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

                <div className={Styles.filter}>
                    <button className={Styles.openFilter} onClick={showHideFilter} >
                        <img src={filter} className={Styles.img} />
                    Фильтр по типу работ
                </button>

                    <div className={Styles.filterButtons}>
                        <NavLink to="#" className={Styles.filterButton}>
                            <img src={confirm} className={Styles.img} />
                        Подтвердить
                    </NavLink>
                        <NavLink to="#" className={Styles.filterButton}>
                            <img src={discard} className={Styles.img} />
                        Сбросить
                    </NavLink>
                    </div>

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
                </div>
            </div>
            <div className={s.appContainer}>
                <ApplicationDemo />
                <ApplicationDemo />
                <ApplicationDemo />
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

export default ListOfAppsOnAssessment;