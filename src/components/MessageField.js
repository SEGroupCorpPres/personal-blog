import React, {useState} from 'react';
import camera from '../assets/icons/camera.svg';
import send from '../assets/icons/send.svg';
import post_img from "../assets/images/post_img.jpg";
import story_img from "../assets/images/codmads.jpg";


function MessageField({addPost, addStory}) {
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
    function handleAddStory() {
        addStory( {
            title: "Play COD. Mobile",
            date: "09.06.2025",
            image: '',
            className: "fifth",
        })
    }

    return (
        <div className="message-form input-container">
            <input className={"message-field"} type="text"
                   placeholder={"Напишите что-нибудь"}/>
            <div className="input-field-suffix">
                <button className="camera-icon" onClick={handleAddStory}>
                        <img src={`${camera}`} alt="camera icon"/>
                </button>
                <button className="send-icon"
                        onClick={handleAddPost}
                >
                    <img src={`${send}`} alt="send icon"/></button>
            </div>
        </div>
    );
}

export default MessageField;