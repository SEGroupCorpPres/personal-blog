import React from 'react';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PostRaw from "../components/PostRaw";
import Comment from "../components/Comment";
import postImage2 from "../assets/images/post_img_2.jpg";
import user1 from "../assets/images/user_1.png";
import user2 from "../assets/images/user_2.png";
import "../styles/PostReviewScreen.css";
import CommentAnswers from "../components/CommentAnswers";
import {NavLink} from "react-router-dom";

const postFooterActions = [
    {
        title: "Как я сходил на FrontEnd Conf 2021",
        date: "21.06.2020",
        link: "#"
    },
    {
        title: "Как писать код быстро и  ascbasfksjkdl",
        date: "21.06.2020",
        link: "#"
    },
    {
        title: "Купил новый ноутбук за 150 000 руб",
        date: "21.06.2020",
        link: "#"
    },
    {
        title: "Купил новый ноутбук за 150 000 руб",
        date: "21.06.2020",
        link: "#"
    },
];


function PostReviewScreen(props) {
    // change action title when length bigger than 30
    function changeActionTitle({title}) {
        if (title.length > 35) {
            return title.slice(0, 30) + "..."
        } else {
            return title
        }

    }

    return (
        <div className={"post-review-screen"}>
            <div className={"container side-display justify-start"}>
                <div className={"post-navbar"}>
                    <NavLink to={'/'}  className={"post-nav"}>вернуться назад</NavLink>
                    <button className={"post-nav-btn"}>
                        <h4 className={"post-nav black"}>поделиться</h4>
                        <ShareOutlinedIcon sx={{color: "white"}}/>
                    </button>
                </div>
                <div className={"post-body"}>
                    <h3 className={"post-title"}>
                        Как создавать сайты легко
                    </h3>
                    <PostRaw date={"21.06.2020"} tags={"создание сайтов"}/>
                    <p className={"post-content margin-0 padding-0"}>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Elementum
                        volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci
                        auctor
                        in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
                        volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis
                        porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc
                        nam
                        id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et
                        vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu
                        egestas.
                        Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare
                        vel
                        volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis
                        urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt
                        arcu
                        egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas
                        ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat
                        orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in
                        at
                        tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat
                        massa. Egestas ornare vel volutpat.</p>
                    <img className={"post-img"} src={postImage2} alt=""/>
                </div>
                <hr/>
                <div className={"post-footer"}>
                    <h4 className={"post-footer-title"}>Интересно почитать</h4>
                    <div className={"post-actions"}>
                        {
                            postFooterActions.map(
                                (action) => (
                                    <div className={"post-action"}>
                                        <a className={"post-text post-action-title"}
                                           href={action.link}>{changeActionTitle({
                                            title: action.title
                                        })}</a>
                                        <p className={"post-date"}>{action.date}</p>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
                <hr/>
                <div className={"post-comments"}>
                    <form action="" title={"Обсуждение"}>
                        <label>Обсуждение</label>
                        <input type="text" className={"add-comment-input"} placeholder="Текст комментария"
                               name={"comment"}/>
                        <button>Отправить</button>
                    </form>
                    <div className={"post-comments"}>
                        <Comment/>
                        <CommentAnswers/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostReviewScreen;