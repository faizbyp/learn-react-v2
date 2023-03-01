import React, { Fragment, useState } from 'react'

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([
    {title: 'anjay', body: 'buuuu', id: 1},
    {title: 'anjay2', body: 'buuuus', id: 2},
    {title: 'anjay3', body: 'buuuud', id: 3}
  ]);

  return (
    <Fragment>
      <h1>Blog Posts Archive</h1>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default BlogPosts