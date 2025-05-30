import Post from "./Post";
import React, {useState} from "react";
import smartphoneImg from "../assets/images/smartphone.jpg"
import post_videoImg from "../assets/images/post_video.png"
import post_img from "../assets/images/post_img.jpg"


function PostList({postsList}) {
    const [posts, setPosts] = useState(postsList)
    return <div className={"post-list"}>
        {
            postsList.map((post) => (
                <Post title={post.title} text={post.text} image={post.img} date={post.date} tags={post.tags}/>))
        }

        <div className={"pagination"}>
            <button className={"pagination-btn"} style={{fontSize: "20px"}}>
                ˂
            </button>
            <button className={"pagination-btn"}>
                1
            </button>
            <button className={"pagination-btn"}>
                2
            </button>
            <button className={"pagination-btn"}>
                3
            </button>
            <button className={"pagination-btn"} style={{fontSize: "20px"}}>
                ˃
            </button>
        </div>
    </div>;
}

export default PostList;