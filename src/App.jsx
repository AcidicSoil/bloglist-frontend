import React, { useState, useEffect } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import blogService from './services/blogs';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [notification, setNotification] = useState(null);

  // Fetch blogs from the backend on component mount
  useEffect(() => {
    blogService.getAll().then(initialBlogs => setBlogs(initialBlogs));
  }, []);

  const handleAddBlog = async (blogData) => {
    try {
      const newBlog = await blogService.create(blogData);
      setBlogs(blogs.concat(newBlog));
      setNotification({ message: `New blog added: ${newBlog.title}`, type: 'success' });
    } catch (error) {
      setNotification({ message: 'Failed to add blog', type: 'error' });
    } finally {
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <div>
      <h1>Blogs</h1>
      <Notification notification={notification} />
      <BlogForm onAddBlog={handleAddBlog} />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default App;
