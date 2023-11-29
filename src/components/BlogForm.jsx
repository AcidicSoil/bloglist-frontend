import React, { useState } from 'react';

const BlogForm = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddBlog({ title, author, url });

    setTitle('');
    setAuthor('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a new blog</h2>
      <div>
        Title:
        <input type="text" value={title} onChange={({ target }) => setTitle(target.value)} />
      </div>
      <div>
        Author:
        <input type="text" value={author} onChange={({ target }) => setAuthor(target.value)} />
      </div>
      <div>
        URL:
        <input type="text" value={url} onChange={({ target }) => setUrl(target.value)} />
      </div>
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default BlogForm;
