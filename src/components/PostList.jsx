import React, { useState } from "react";
import '../styles/App.css'
import Post from "./Post";

const PostList = ({posts, title, removePost}) => {
    

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {
                posts.map((post, index) => <Post removePost={removePost} number={index + 1}key={post.id} post={post} />)
            }
        </div>
    )

}

export default PostList