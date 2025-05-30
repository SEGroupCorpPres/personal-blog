import React from 'react';
import sidebar from "../assets/images/sidebarbg.jpg";
import avatar from "../assets/images/sulaymon.png";
import instagram from "../assets/icons/instagram.svg";
import pinterest from "../assets/icons/pinterest.svg";
import vk from "../assets/icons/vk.svg";
import {NavLink} from "react-router-dom";

function LeftSidebar() {
    return (
        <div
            className={"d-flex flex-column align-items-center justify-content-start text-center min-vh-100 h-auto h-100 left-side"}>
            <div className={"w-100 bg-white d-block position-relative"}>
                <img className={"object-fit-cover w-100 position-relative"} src={sidebar} alt="sidebar bg"/>
                <div
                    className={"object-fit-cover position-absolute top-100 start-50 translate-middle p-1 bg-white rounded-circle"}>
                    <img className={"rounded-circle"} src={avatar} alt=""/>
                </div>
            </div>

            <div className={"side-display sidebar-body"} style={{padding: '4rem 0'}}>
                <h3>Starscream</h3>
                <p style={{fontSize: "14px", fontWeight: "lighter"}}>blog at Flutter & Frontend Developer</p>
                <span className={"social-logo-line"}>
                        <img className={"social-logo"} src={instagram}
                             alt="instagram logo"/>
                        <img className={"social-logo"}
                             src={pinterest}
                             alt="pinterest logo"/>
                        <img
                            className={"social-logo"} src={vk} alt="vk logo"/>
                    </span>

                <hr className={"w-100 border-1 border-black my-3"}/>
                <p className={"fs-6 text-center fw-medium w-100 p-2"}>I'm a Flutter developer! I worked as
                    a Flutter, Web and Fullstack developer at Smart Card, Qwerty Al-Fajr, Smart Software, Mustafa
                    Software companies! Currently I am working Part Time in AppxTech Group and Everbest IT Academy
                    and I teach Mobile App Development from Flutter to School students in Everbest IT Academy</p>
                <hr className={"w-100 border-1 border-black my-3"}/>
                <div className={"my-3 w-100 d-flex flex-row justify-content-center"}>
                    <NavLink to={"/portfolio"} style={{backgroundColor: "#ED3024"}}
                             className={"my-0 mx-1 text-decoration-none text-white rounded-pill sidebar-btn"}>Portfolio</NavLink>
                    <NavLink to={"/contact"} style={{backgroundColor: "#3137C9"}}
                             className={"my-0 mx-1 text-decoration-none text-white rounded-pill sidebar-btn"}>Write
                        Me</NavLink>
                </div>
            </div>
        </div>
    );
}

export default LeftSidebar;