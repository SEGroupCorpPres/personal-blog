import React from "react";

function PostRaw({date,tags}) {
    return <div className={"post-raw"}>
        <p className={"post-date"}>{date}</p>
        <p className={"post-date"} style={{fontSize: "30px", color: "white"}}>⦁</p>
        <p className={"post-date"}>{tags}</p>
    </div>;
}

export default PostRaw;
