import React from "react";
import '../styles/App.css'
import MyButton from "./Ui/button/MyButton";

const Post = ({removePost, ...props}) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div className="">{props.post.description}</div>

            </div>
            <div className="post__btns">
                <MyButton onClick={() => removePost(props.post)}> Удалить </MyButton>
            </div>
        </div>
    )

}

export default Post