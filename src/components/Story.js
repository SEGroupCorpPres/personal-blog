import React from 'react';

function Story({title, date, className}) {
    return (
        <div className={`story ${className}`}>
            <p className={"story-title"}>{title}</p>
            <p className={"story-date"}>{date}</p>
        </div>
    );
}

export default Story;