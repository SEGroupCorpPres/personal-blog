import React from "react";
import Comment from "./Comment";

function CommentAnswers() {
    return <div className={"comment-answers"}>
        {Array.from(Array(3).keys()).map((_, index) => (<Comment key={index} />))}
    </div>;
}

export default CommentAnswers;