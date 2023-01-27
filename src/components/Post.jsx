import React from "react";
import '../styles/App.css'

const Post = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div className="">{props.post.description}</div>

            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    )

}

export default Post