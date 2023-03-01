import React, { Fragment, useState } from 'react'
import Blog from '../components/Blog';

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([
    {title: 'anjay', body: 'buuuu', id: 1},
    {title: 'anjay2', body: 'buuuus', id: 2},
    {title: 'anjay3', body: 'buuuud', id: 3}
  ]);

  return (
    <Fragment>
      <h1>Blog Posts Archive</h1>
      <Blog blogs={blogs} />
    </Fragment>
  )
}

export default BlogPosts