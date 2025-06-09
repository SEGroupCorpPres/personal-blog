import React from 'react';
import Story from "./Story";
import post_img from "../assets/images/post_img.jpg";



function Stories({ stories}) {

    return (
        <div className={"stories"}>
            {
                stories.map(
                    (story) => (
                        <Story className={story.className} title={story.title} date={story.date}/>
                    )
                )
            }
        </div>
    );
}

export default Stories;