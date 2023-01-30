import React, { useMemo, useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/Ui/PostForm";
import MySelect from "./components/Ui/select/MySelect";
import MyInput from "./components/Ui/input/MyInput";

function App() {

  const [posts, setPosts] = useState([
    { title: 'aa', id: 1, description: 'aaajavascript is programming language' },
    { title: 'JavaScript', id: 2, description: '2222javascript is programming language' },
    { title: 'bbbbvaScript', id: 3, description: 'bbbbjavascript is programming language' },
    { title: 'JfffffScript', id: 4, description: 'dddjavascript is programming language' },
  ])

  const [seachQuery, setSearchQueary] = useState('')
  const [selectedSort, setSelectedSort] = useState('')


  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))

    } else {
      return posts
    }

  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() =>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(seachQuery))


  }, [seachQuery,sortedPosts])

  const createPost = (newPost) => {

    setPosts([...posts, newPost])

  }

  const removePost = (post) => {

    setPosts(posts.filter(p => p.id !== post.id))

  }

  const sortPosts = (sort) => {

    setSelectedSort(sort)



  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 8px' }} />

      <MyInput value={seachQuery} onChange={(e) => setSearchQueary(e.target.value)} placeholder="Поиск..." />

      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue={'Сортировка по'}
        option={[
          { value: 'title', name: 'По названию' },
          { value: 'description', name: 'По описанию' },
        ]}
      />

      {sortedAndSearchedPosts.length > 0
        ?
        <PostList removePost={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
        :
        <h1 style={{ marginTop: "10px", textAlign: 'center' }}>Посты не найдены</h1>}
    </div >
  );
}

export default App;
