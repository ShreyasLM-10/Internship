import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BlogList from './components/BlogList'
import posts from './data/posts.json'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories from posts
  const categories = ['All', ...new Set(posts.map(post => post.category))]

  // Filter posts by search term AND category
  const filteredPosts = posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <BlogList posts={filteredPosts} />
      </main>
      <footer className="footer">
        <p>© 2026 DevBlog — A React Mini Project</p>
      </footer>
    </div>
  )
}

export default App
