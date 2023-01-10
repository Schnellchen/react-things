import React, { useRef } from 'react';

class SayHi extends React.Component {
    constructor(props) {
        super(props)
      }

  sayHi() {
    alert("I'm a SayHi class method called by ref!");
  }

  render() {
    return (<div>SayHi class with method</div>)
  }
}

const ClassRef = () => {
  const ref = useRef(null);

  return (
    <>
    <h3>Class ref</h3>
      <SayHi ref={ref} />
      <button onClick={() => ref.current.sayHi()}>Call a sibling component method</button>
    </>
  );
}

export {ClassRef};
