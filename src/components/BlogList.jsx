import Blog from './Blog'; // Assume Blog is a component to render individual blog post

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2>All Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
