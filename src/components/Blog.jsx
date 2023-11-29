import React from 'react';

const Blog = ({ blog }) => {
  return (
    <li>
      <h3>{blog.title} by {blog.author}</h3>
      <p>URL: <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a></p>
      <p>Likes: {blog.likes} <button>Like</button></p>
      {/* You can add functionality to the Like button here */}
      {/* Additional functionalities like delete or edit can also be added if needed */}
    </li>
  );
};

export default Blog;
