import React from 'react'

const Blog = (props) => { // bisa juga dengan parameter {blogs} (langsung tanpa define variabel lagi)
  const blogs = props.blogs;

  return (
    <div>
    {blogs.map((blog) => (
      <div key={blog.id}>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
      </div>
    ))}
    </div>
  )
}

export default Blog