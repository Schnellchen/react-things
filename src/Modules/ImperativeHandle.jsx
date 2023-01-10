import React, { useRef, useImperativeHandle } from 'react';
import { MemoizedBtn } from './Memo';

// Try to replace customRef with comdination of forwardRef HOC & ref
const ImperativeHandledComponent = ({customRef}) => {
    const divRef = useRef(null);
    
    useImperativeHandle(customRef, () => {
      return {
        handleColor: () => {
          if (divRef.current.style.color === 'orange') {
            divRef.current.style.color = "green";
          } else {
            divRef.current.style.color = "orange";
          }
        }
      }
    })
    return (
      <div ref={divRef} style={{color: "orange"}}>This color is changed in parent by using child-defined function</div>
    );
  }

const ImperativeHandle = () => {
    const imperativeHandleRef = useRef(null);

    return (
      <>
        <h3>useImperativeHandle</h3>
        <button text="Change color" onClick={() => {
          imperativeHandleRef.current.handleColor();
        }}>Change color</button>
        <ImperativeHandledComponent customRef={imperativeHandleRef} />
      </>
    );
  }

  export {ImperativeHandle}