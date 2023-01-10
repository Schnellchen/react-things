import React, {useState, useEffect} from "react";

const ListItem = ({text}) => {
    useEffect(() => {
      console.log("List item ", text);
    }, [text])
  
    return <p>{text}</p>
  }
  
  const List = () => {
    const [list, setList] = useState([]);
  
    const addToTop = () => {
      setList([Math.random(), ...list])
    }
  
    const addToBot = () => {
      setList([...list, Math.random()])
    }
  
    // check in devtools how dom is changed when key is passed and when it's not
  
    return <>
    <button onClick={addToTop}>Add to top</button>
    <button onClick={addToBot}>Add to bot</button>
      {list.map((item) => <ListItem text={item} key={item} />)}
    </>
  }

const VolatileTypeComponent = ({isSpan, children}) => {
    return (
      <>
      {isSpan ? <span>{children}</span> : <p>{children}</p>}
      </>
    )
  }

const ReconciledChild = () => {
    useEffect(() => {
      // console.log("I'm here again!")
      // return () => console.log("I'm destroyed by reconcilation")
    }, [])
    return <p>I'm reconciled :c</p>
  }
  
  const DifferentTypeComponent = () => {
    // check what's going on with ReconciledChild when parent type is changed
    const [isSpan, setSpan] = useState(true);
    return (
      <div>
        <button onClick={() => setSpan(prev => !prev)}>Change span to p</button>
        <VolatileTypeComponent isSpan={isSpan}>
          <ReconciledChild />
        </VolatileTypeComponent>
      </div>
    );
  }
  
  const DifferentAttrComponent = () => {
    // check what's going on with ReconciledChild when parent attr is changed
    const [isSpan, setSpan] = useState(true);
    return (
      <div>
        <button onClick={() => setSpan(prev => !prev)}>Change attribute</button>
        <span className={`${isSpan}`}>
          <ReconciledChild />
        </span>
      </div>
    );
  }

  const Reconcilation = () => <>
    <h3>Reconcilation</h3>
    <List />
    <DifferentTypeComponent />
    <DifferentAttrComponent />
  </>

export { Reconcilation }