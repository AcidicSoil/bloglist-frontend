import Blog from './Blog';

const BlogList = ({ blogs, setBlogs }) => {
  const handleLike = (id, updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === id ? updatedBlog : blog));
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog => 
        <Blog 
          key={blog.id} 
          blog={blog} 
          onDelete={handleDelete} 
          onLike={handleLike} 
        />
      )}
    </div>
  );
};

export default BlogList;
