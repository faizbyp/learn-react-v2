import React, { useState } from 'react';
import Blog from '../components/Blog';
import useFetch from '../components/useFetch';

function BlogPosts() {
  const [name, setName] = useState('pais');
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  // const handleHide = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlogs)
  // }

  return (
    <>
      <h1>Blog Posts Archive</h1>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {blogs && <Blog blogs={blogs} />}
      {/* conditional rendering ketika true, elemen dirender */}
      <button type="button" onClick={() => setName('udin')} style={{ marginTop: '20px', backgroundColor: 'green' }}>ganti nama</button>
      <p>{name}</p>
    </>
  );
}

export default BlogPosts;
