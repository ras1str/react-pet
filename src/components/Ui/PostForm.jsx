import React, { useState } from "react"
import MyButton from "./button/MyButton"
import MyInput from "./input/MyInput"

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', description: '' })

    const addNewPost = (e) =>{
    
        e.preventDefault()
    
         const newPost ={

            ...post, id: Date.now()

         }
          create(newPost)
          setPost({title : '', description: ''})
    
      }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(event) => { setPost({ ...post, title: event.target.value }) }}

                type="text"
                placeholder="Название поста"
            />

            <MyInput
                value={post.description}
                onChange={(event) => { setPost({ ...post, description: event.target.value }) }}
                type="text"
                placeholder="Описание"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )

}

export default PostForm