import React, { useState, useEffect } from 'react';
import './Home.css';

const hardcodedBlogs = [
  {
    id: 1,
    title: 'First Blog Post',
    description: 'This is the description for the first blog post.',
    image: '/images/blog1.jpg'
  },
  {
    id: 2,
    title: 'Second Blog Post',
    description: 'This is the description for the second blog post.',
    image: '/images/blog2.jpg'
  },
  {
    id: 3,
    title: 'Third Blog Post',
    description: 'This is the description for the third blog post.',
    image: '/images/blog3.jpg'
  },
  {
    id: 4,
    title: 'Second Blog Post',
    description: 'This is the description for the second blog post.',
    image: '/images/blog4.jpg'
  },
  {
    id: 5,
    title: 'Second Blog Post',
    description: 'This is the description for the second blog post.',
    image: '/images/blog5.jpg'
  }
];

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    setBlogs(hardcodedBlogs);
  }, []);

  return (
    <div className="home">
      <h2>Home</h2>
      <div className="blog-list">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-item">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <img src={blog.image} alt={blog.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;