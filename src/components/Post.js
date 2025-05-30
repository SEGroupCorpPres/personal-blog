import React from "react";
import PostRaw from "./PostRaw";
import {NavLink} from "react-router-dom";

function Post({image, title,text, date, tags,btnText}) {
    return <div className={"post"}>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        {image && (<img className={"post-img"} src={`${image}`} alt={`post image`}/>)}
        <div className={"post-content"}>
            <h3 className={"post-title"}>{title}</h3>
            <p className={"post-text"}>{text}</p>
            <div className={"post-footer"}>
                <PostRaw date={date} tags={tags}/>
                <NavLink className={"post-btn"} href="#post" to={'/post-review'}>читать</NavLink>
            </div>
        </div>
    </div>;
}
export default Post;