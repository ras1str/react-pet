import React, { useRef, useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/Ui/PostForm";

function App() {

  const [posts, setPosts] = useState([
    { title: 'JavaScript', id: 1, description: 'javascript is programming language' },
    { title: 'JavaScript', id: 2, description: 'javascript is programming language' },
    { title: 'JavaScript', id: 3, description: 'javascript is programming language' },
    { title: 'JavaScript', id: 4, description: 'javascript is programming language' },
])


const createPost =(newPost) =>{

  setPosts([...posts, newPost])

}


  return (
    <div className="App">
        <PostForm create ={createPost}/> 
        <PostList posts ={posts} title="Список постов"/>
    </div >
  );
}

export default App;
