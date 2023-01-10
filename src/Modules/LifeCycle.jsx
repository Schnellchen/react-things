import React, { useEffect, useRef, useState } from 'react';

const Timer = ({time, setTime, isActive}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isActive) {
      const id = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000);
      ref.current = id;
    }

    if (!isActive){
      clearInterval(ref.current);
    }
    
    return () => {
      clearInterval(ref.current);
    };
  }, [isActive, ref, setTime])

  return (<p>{time}</p>);
}

class Title extends React.Component {
  constructor(props) {
    // console.log("constructor")
    super(props)
    this.state = {description: "Is timer active: "}
    this.handleClick = this.handleClick.bind(this)
    
  }
  
  handleClick() {
    // console.log(this.props)
    return this.setState({description: this.state.description.split("").reverse().join("")}, () => console.log("setState: ", this.state.description))
  }

  UNSAFE_componentWillMount() {
    // console.log("componentWillMount")
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps: " + JSON.stringify(nextProps))
  // }

  // UNSAFE_componentWillUpdate(nextProps) {
  //   console.log("componentWillUpdate: " + JSON.stringify(nextProps))
  // }

  static getDerivedStateFromProps(props, state) {
    // console.log("getDerivedStateFromProps: " + JSON.stringify(props) + " " + JSON.stringify(state));
    
    return null;
  }

  componentDidMount() {
    // console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    // console.log("shouldComponentUpdate")
    return true
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate")
  }

  render() {
    // console.log("render")
    return (<>
    <div>{this.props.title}</div>
    <div onClick={this.handleClick}>{this.state.description}{`${this.props.isActive}`}</div>
    </>)
  }
}

const LifeCycle = () => {
  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);
  
  useEffect(() => {
    // console.log("New time is: ", time)

    // return () => console.log("useEffect return!")
  }, [time])

  return (
    <>
    <h3>LifeCycle</h3>
      <Title isActive={isActive} />
      <Timer setTime={setTime} time={time} isActive={isActive} />
      <button onClick={() => setActive(!isActive)}>{isActive ? "Stop" : "Start"}</button>
      <button onClick={() => setTime(0)}>Clear</button>
    </>
  );
}

export {LifeCycle};
