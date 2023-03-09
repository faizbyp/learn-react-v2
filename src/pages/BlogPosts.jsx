import React, { Fragment, useState, useEffect } from 'react'
import Blog from '../components/Blog'

const BlogPosts = () => {
  const [blogs, setBlogs] = useState(null)

  const [name, setName] = useState('pais')

  // const handleHide = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlogs)
  // }

  // fungsi yg dijalanin tiap kali render
  useEffect(() => {
    console.log('use effect coy')
    fetch("http://localhost:8000/blogs")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
      })
  }, []) // array dependency buat nentuin kapan fungsi dijalanin (saat suatu state berubah)

  return (
    <Fragment>
      <h1>Blog Posts Archive</h1>
      {blogs && <Blog blogs={blogs} />}
      <button onClick={() => setName('udin')} style={{marginTop: "20px", backgroundColor: "green"}}>ganti nama</button>
      <p>{name}</p>
    </Fragment>
  )
}

export default BlogPosts