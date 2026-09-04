import BlogCard from './BlogCard'

function BlogList({ posts }) {
  if (posts.length === 0) {
    return (
      <div className="no-posts">
        <span className="no-posts-icon">📭</span>
        <h3>No posts found</h3>
        <p>Try adjusting your search or changing the category filter.</p>
      </div>
    )
  }

  return (
    <div className="blog-list">
      <p className="results-count">
        Showing {posts.length} {posts.length === 1 ? 'post' : 'posts'}
      </p>
      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default BlogList
