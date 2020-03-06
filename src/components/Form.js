import React from 'react'

export default function Form(props) {
    return (
      <form className="form">
          <input className="input"
           type="text" 
           value={props.value}
           placeholder="enter city" 
           onChange={props.change}
           />
          <button className="btn">Search city</button>
      </form>
    )
}
