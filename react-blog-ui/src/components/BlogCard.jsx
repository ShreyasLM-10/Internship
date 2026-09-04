function BlogCard({ post }) {
  // Format date to a readable string
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="blog-card">
      <div className="card-category-badge">{post.category}</div>
      <h2 className="card-title">{post.title}</h2>
      <p className="card-content">{post.content}</p>
      <div className="card-meta">
        <div className="card-author">
          <span className="author-avatar">{post.author.charAt(0)}</span>
          <span className="author-name">{post.author}</span>
        </div>
        <span className="card-date">{formattedDate}</span>
      </div>
    </article>
  )
}

export default BlogCard
