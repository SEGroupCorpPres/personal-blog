import React from 'react';
import Story from "./Story";

let stories = [
    {
        title: "Отдыхаю на природе",
        date: "21.09.2020",
        image: '',
        className: "first",
    },
    {
        title: "Заканчиваю сложный проект",
        date: "15.09.2020",
        image: '',
        className: "second",
    },
    {
        title: "Переехал в новую квартиру",
        date: "11.09.2020",
        image: '',
        className: "third",
    },
    {
        title: "Осень пришла!",
        date: "28.08.2020",
        image: '',
        className: "fourth",
    }
]

function Stories() {
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