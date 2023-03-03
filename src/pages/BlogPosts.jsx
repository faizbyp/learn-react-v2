import React, { Fragment, useState } from 'react'
import Blog from '../components/Blog';

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([
    {title: 'anjay', body: 'buuuu', id: 1},
    {title: 'anjay2', body: 'buuuus', id: 2},
    {title: 'anjay3', body: 'buuuud', id: 3}
  ]);

  const handleHide = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <Fragment>
      <h1>Blog Posts Archive</h1>
      <Blog blogs={blogs} handleHide={handleHide} />
      <h1>Blog yang id-nya di atas 1</h1>
      <Blog blogs={blogs.filter((blog) => blog.id > 1)} />
    </Fragment>
  )
}

export default BlogPosts