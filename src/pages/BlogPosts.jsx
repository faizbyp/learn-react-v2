import React, { Fragment, useState, useEffect } from 'react'
import Blog from '../components/Blog'

const BlogPosts = () => {
  const [blogs, setBlogs] = useState(null)
  const [name, setName] = useState('pais')
  const [isPending, setIsPending] = useState(true)

  // const handleHide = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlogs)
  // }

  // fungsi yg dijalanin tiap kali render
  useEffect(() => {
    setTimeout(() => {
      console.log('use effect coy')
      fetch("http://localhost:8000/blogs")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setBlogs(data)
          setIsPending(false)
        })
    }, 2000)
  }, []) // array dependency buat nentuin kapan fungsi dijalanin (saat suatu state berubah)

  return (
    <Fragment>
      <h1>Blog Posts Archive</h1>
      {isPending && <h2>Loading...</h2>}
      {blogs && <Blog blogs={blogs} />} {/* conditional rendering ketika true, elemen dirender */}
      <button onClick={() => setName('udin')} style={{marginTop: "20px", backgroundColor: "green"}}>ganti nama</button>
      <p>{name}</p>
    </Fragment>
  )
}

export default BlogPosts