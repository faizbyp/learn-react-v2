import React, { Fragment, useState, useEffect } from 'react'
import Blog from '../components/Blog';

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([
    {title: 'anjay', body: 'buuuu', id: 1},
    {title: 'anjay2', body: 'buuuus', id: 2},
    {title: 'anjay3', body: 'buuuud', id: 3}
  ]);

  const [name, setName] = useState('pais')

  const handleHide = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  // fungsi yg dijalanin tiap kali render
  useEffect(() => {
    console.log('use effect coy')
    console.log(name)
  }, [name]) // array dependency buat nentuin kapan fungsi dijalanin (saat suatu state berubah)

  return (
    <Fragment>
      <h1>Blog Posts Archive</h1>
      <Blog blogs={blogs} handleHide={handleHide} />
      <button onClick={() => setName('udin')} style={{marginTop: "20px", backgroundColor: "green"}}>ganti nama</button>
      <p>{name}</p>
      <h1>Blog yang id-nya di atas 1</h1>
      <Blog blogs={blogs.filter((blog) => blog.id > 1)} handleHide={handleHide} />
    </Fragment>
  )
}

export default BlogPosts