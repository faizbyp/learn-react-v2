import React from 'react'
import {useNavigate} from 'react-router-dom'

const Form = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Form</h1>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="" />
      <label htmlFor="number">Number</label>
      <input type="number" name="number" id="" />
      <button onClick={
        () => {navigate('/submitted');
        }}>
      Submit</button>
    </div>
  )
}

export default Form