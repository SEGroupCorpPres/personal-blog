import './App.css';
import './styles/Sidebar.css'
import './styles/Navbar.css'
import LeftSidebar from "./components/LeftSidebar";
import RightSide from "./components/RightSide";
import {useState} from "react";
import smartphoneImg from "./assets/images/smartphone.jpg";
import post_videoImg from "./assets/images/post_video.png";
import post_img from "./assets/images/post_img.jpg";
let postsList = [
    {
        title: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
        img: null,
        date: "21.06.2020",
        tags: [],
    },
    {
        title: "Как писать код быстро и безболезненно?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
        img: smartphoneImg,
        date: "21.06.2020",
        tags: [
            "создание сайтов",
        ],
    },
    {
        title: "Как писать код быстро и безболезненно?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
        img: post_videoImg,
        date: "21.06.2020",
        tags: [
            "продвижение видео"
        ],
    },
    {
        title: "Как писать код быстро и безболезненно?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
        img: post_img,
        date: "21.06.2020",
        tags: [
            "создание сайтов",
        ],
    },
]

function App() {
    const [posts, setPosts] = useState(postsList)
    // add post function
    function addPost(post) {
        console.log(post)
        setPosts((posts) => [...posts, post])
        console.log(posts)
    }
    return (
        <div className="app d-flex flex-row align-items-start justify-content-center h-100 vw-100 text-center text-white">
            <LeftSidebar />
            <RightSide addPost={addPost} posts={posts} />
        </div>
    );
}

export default App;
