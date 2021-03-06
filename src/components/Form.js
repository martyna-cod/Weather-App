import React from 'react'

export default function Form(props) {
    return (
      <form onSubmit={props.submit} className="form">
          <input className="input"
           type="text" 
           value={props.value}
           placeholder="enter city" 
           onChange={props.change}
           />
    
      </form>
    )
}
