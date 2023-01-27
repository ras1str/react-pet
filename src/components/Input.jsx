import React, { useState } from "react"

const Input = () => { 

  const [value, setValue] = useState('123')

  const onChangeValue = (event) =>{
    setValue(event.target.value)
  
  }
    return (
    <div className="App">
      
      <h1>{value}</h1>
      <input type="text" onChange={event => onChangeValue(event)} value={value} />
      </div>
    )

}

export default Input