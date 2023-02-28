import React, { useState } from 'react'

const About = () => {
  const [count, setCount] = useState(0);

  const handleClick = (secret) => {
    console.log(secret);
  }

  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>About</h1>
      <h3>Anonymous Function Button</h3>
      <button onClick={() => {handleClick('km krenn');}}>Click to display secret on log</button>
      <h3>Count using useState</h3>
      <p>for function component</p>
      <button onClick={() => {handleCount()}}>Count is {count}</button>
    </div>
  )
}

export default About