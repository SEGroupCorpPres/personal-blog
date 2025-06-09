import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import Navbar from "./Navbar";
import PostReviewScreen from "../screens/PostReviewScreen";
import {Route, Routes} from "react-router-dom";

function RightSide({posts, addPost, addStory, stories}) {
    return (
        <div
            className={"d-flex flex-column align-items-center justify-content-start text-center min-vh-100 h-auto right-side"}>
            <Navbar/>
            <Routes>
                <Route index element={<HomeScreen posts={posts} addPost={addPost} addStory={addStory} stories={stories} />}/>
                <Route path="/post-review" element={<PostReviewScreen/>}/>
                {/*<Route path="settings" element={<Settings/>}/>*/}
            </Routes>
        </div>
    );
}

export default RightSide;