import React, { useState } from 'react';
import ReactDOM from 'react-dom'

const Modal = () => {
    return <section style={{backgroundColor: "red", width: 400, height: 400, position: "absolute", top: 200, left: 200}}>Modal</section>
  }
  
  const Portal = () => {
    const [isOpen, setOpen] = useState(false)
  
    return <div>
        <h3>Portal</h3>
        <button onClick={() => setOpen(!isOpen)}>Toggle portal</button>
        {isOpen && (() => ReactDOM.createPortal(<Modal />, document.body))()}
    </div>
  }

export { Portal }