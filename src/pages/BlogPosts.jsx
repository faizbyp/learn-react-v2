import React, { useState, useEffect } from 'react';
import Blog from '../components/Blog';

function BlogPosts() {
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState('pais');
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const handleHide = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlogs)
  // }

  // fungsi yg dijalanin tiap kali render
  useEffect(() => {
    console.log('use effect coy');
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        if (!res.ok) {
          throw Error('gak bisa ambil data cuy');
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []); // array dependency buat nentuin kapan fungsi dijalanin (saat suatu state berubah)

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
