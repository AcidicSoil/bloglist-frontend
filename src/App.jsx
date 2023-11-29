import React, { useState, useEffect } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import blogService from './services/blogs';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs));
  }, []);

  const addBlog = async (blogData) => {
    try {
      const newBlog = await blogService.create(blogData);
      setBlogs(blogs.concat(newBlog));
      setNotification(`Added '${newBlog.title}' by ${newBlog.author}`);
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      console.error('Failed to add blog', error);
      setNotification('Error adding blog');
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const updateBlog = async (id, updatedBlog) => {
    try {
      await blogService.update(id, updatedBlog);
      setBlogs(blogs.map(blog => blog.id === id ? updatedBlog : blog));
    } catch (error) {
      console.error('Failed to update blog', error);
      setNotification('Error updating blog');
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await blogService.remove(id);
      setBlogs(blogs.filter(blog => blog.id !== id));
      setNotification('Blog deleted');
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      console.error('Failed to delete blog', error);
      setNotification('Error deleting blog');
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <div>
      <h1>Blogs</h1>
      <Notification notification={notification} />
      <BlogForm onAddBlog={addBlog} />
      <BlogList blogs={blogs} setBlogs={setBlogs} onUpdateBlog={updateBlog} onDeleteBlog={deleteBlog} />
    </div>
  );
};

export default App;
