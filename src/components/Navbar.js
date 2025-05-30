import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={"d-flex flex-row w-100 justify-content-between align-items-center navbar py-0"}>
            <ul className={"d-flex flex-row justify-content-start align-items-center h-100 text-white fs-3 list-unstyled py-0 px-4 nav-items mx-0 my-2"}>
                <li className="d-flex flex-row align-items-center px-2"><NavLink to={""}
                                                                                 className={"fs-6 text-uppercase my-0 mx-1 text-decoration-none text-white "}>Главная</NavLink>
                </li>
                <li className="d-flex flex-row align-items-center px-2"><NavLink to={""}
                                                                                 className={"fs-6 text-uppercase my-0 mx-1 text-decoration-none text-white "}>Статьи</NavLink>
                </li>
                <li className="d-flex flex-row align-items-center px-2"><NavLink to={""}
                                                                                 className={"fs-6 text-uppercase my-0 mx-1 text-decoration-none text-white "}>Обо
                    мне</NavLink></li>
                <li className="d-flex flex-row align-items-center px-2"><NavLink to={""}
                                                                                 className={"fs-6 text-uppercase my-0 mx-1 text-decoration-none text-white "}>Реклама</NavLink>
                </li>
            </ul>
            <div className={"d-flex flex-row justify-content-center align-items-center nav-right h-100"}>
                <NavLink to={""} id={"nav-btn"}
                         className={"fs-6 text-uppercase my-0 mx-3 text-decoration-none text-white "}
                         href="#">Профиль</NavLink>
                <form action="">
                    <input
                        className={"fs-6 text-uppercase my-0 mx-1 text-decoration-none text-white border-0 w-100 me-0 h-auto py-0 px-1 bg-dark"}
                        type="text"
                        placeholder="Поиск по блогу"/>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;