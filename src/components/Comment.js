import user1 from "../assets/images/user_1.png";
import React from "react";
import CommentAnswers from "./CommentAnswers";


function Comment() {
    return <div className={"comment"}>
        <div className={"user-info"}>
            <img src={user1} alt=""/>
            <div className={"user-name-date"}>
                <h5 className={"user-name"}>Дмитрий Валак</h5>
                <p className={"comment-date"}>1 неделю назад</p>
            </div>
        </div>
        <p className={"comment-content"}>
            Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at
            tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
            volutpat massa. Egestas ornare vel volutpat.
        </p>
        <a className={"post-btn"} href="#">ответить</a>
    </div>;
}
export default Comment