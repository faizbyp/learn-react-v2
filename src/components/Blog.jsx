import React from 'react'

const Blog = (props) => { // bisa juga dengan parameter {blogs} (langsung tanpa define variabel lagi)
  const blogs = props.blogs;
  const handleHide = props.handleHide;

  return (
    <div>
    {blogs.map((blog) => (
      <div key={blog.id}>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
        <button onClick={() => handleHide(blog.id)}>Hide</button>
      </div>
    ))}
    </div>
  )
}

export default Blog