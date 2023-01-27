import React, { useState } from "react"
const Counter = () => { 
    const [likes, setLikes] = useState(0) 
    const incriment = () => {
        setLikes(likes+1)
      
      }
      const decriment = () => {
        setLikes(likes-1)
      
      }
    return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={incriment}>incriment</button>
      <button onClick={decriment}>decrement</button>
    </div>
    )

}

export default Counter