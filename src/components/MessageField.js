import React, {useState} from 'react';
import camera from '../assets/icons/camera.svg';
import send from '../assets/icons/send.svg';
import post_img from "../assets/images/post_img.jpg";

function MessageField({addPost}) {
function handleAddPost() {
    addPost({
        title: "Yangi Post Qo'shildi",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
        img: post_img,
        date: "21.06.2021",
        tags: [
            "создание сайтов, Post",
        ],
    },)
}
    return (
        <div className="message-form input-container">
            <input className={"message-field"} type="text"
                   placeholder={"Напишите что-нибудь"}/>
            <div className="input-field-suffix">
                <span className="camera-icon"><img src={`${camera}`}
                                                   alt="camera icon"/></span>
                <button className="send-icon"
                        onClick={handleAddPost}
                >
                    <img src={`${send}`} alt="send icon"/></button>
            </div>
        </div>
    );
}

export default MessageField;