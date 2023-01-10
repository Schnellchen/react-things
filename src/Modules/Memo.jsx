import React, { useEffect, memo, useState, useCallback } from 'react';

const MemoizedBtn = memo(({text, onClick}) => {

    // console.log("MemoizedBtn is mounted")
    useEffect(() => {
      // console.log("onClick link is changed!")
    }, [onClick])
  
    return (<button onClick={onClick}>{text}</button>)
  })

const Memo = () => {
    const [isStateChanged, setStateChanged] = useState(false)

    // also try this callback without useCallback
    const memoizedCallback = useCallback(() => {
      alert("Hello!")
    }, [])

    return (<>
    <h3>Memo</h3>
      <button onClick={() => setStateChanged(!isStateChanged)}>Toggle state</button>
      <MemoizedBtn text="Memoized btn" onClick={memoizedCallback} />
    </>)
  }

export {Memo}