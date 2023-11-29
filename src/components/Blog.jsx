import blogService from '../services/blogs';

const Blog = ({ blog, onDelete, onLike }) => {
  const handleLike = async () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 };
    await blogService.update(blog.id, updatedBlog);
    onLike(blog.id, updatedBlog);
  };

  const handleDelete = async () => {
    if (window.confirm(`Delete blog "${blog.title}" by ${blog.author}?`)) {
      await blogService.remove(blog.id);
      onDelete(blog.id);
    }
  };

  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.author}</p>
      <p>{blog.url}</p>
      <p>
        Likes: {blog.likes}
        <button onClick={handleLike}>Like</button>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Blog;
