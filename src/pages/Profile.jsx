import React from 'react'
import {useParams} from 'react-router-dom'

const Profile = () => {
  let {username} = useParams();

  return (
    <h1>This is {username} profile</h1>
  )
}

export default Profile