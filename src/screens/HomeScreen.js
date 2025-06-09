import React, {useState} from 'react';
import "../styles/HomeScreen.css"
import MessageField from "../components/MessageField";
import Stories from "../components/Stories";
import PostList from "../components/PostList";
import smartphoneImg from "../assets/images/smartphone.jpg";
import post_videoImg from "../assets/images/post_video.png";
import post_img from "../assets/images/post_img.jpg";

function HomeScreen({posts, addPost, addStory, stories}) {

    return (
        <main>
            <Stories  stories={stories} />
            <MessageField addPost={addPost} addStory={addStory} />
            <PostList postsList={posts} />
        </main>
    );
}

export default HomeScreen;