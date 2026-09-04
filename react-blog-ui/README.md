# React Blog UI

A blog listing interface built with React 19 and Vite. Posts load from a local
JSON file and are filtered live by search term and category.

## Getting Started

```bash
npm install
npm run dev
```

The app runs at the URL Vite prints, usually `http://localhost:5173`.

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint      # Oxlint
```

## Project Structure

```
src/
├── App.jsx                  # state, filtering logic, layout
├── data/posts.json          # 12 blog posts
└── components/
    ├── Header.jsx
    ├── SearchBar.jsx        # search input + category buttons
    ├── BlogList.jsx         # grid, result count, empty state
    └── BlogCard.jsx         # single post card
```

## How Filtering Works

`App.jsx` holds two pieces of state, `searchTerm` and `selectedCategory`. On
every render the post list is filtered twice over:

```js
const matchesSearch =
  post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  post.content.toLowerCase().includes(searchTerm.toLowerCase())

const matchesCategory =
  selectedCategory === 'All' || post.category === selectedCategory
```

A post is shown only if both conditions hold, so search and category filters
compose rather than override each other.

The category list is not hardcoded. It is derived from the post data itself:

```js
const categories = ['All', ...new Set(posts.map(post => post.category))]
```

Adding a post with a new category to `posts.json` makes a new filter button
appear automatically, with no change to any component.

## Component Notes

**SearchBar** is fully controlled. It owns no state; it receives `searchTerm`
and `selectedCategory` as props and calls `onSearchChange` and
`onCategoryChange` to update the parent. The clear button renders only when
there is text to clear.

**BlogList** returns early with an empty state when the filtered array has zero
length, and otherwise renders a live result count above the grid.

**BlogCard** formats the raw ISO date into a readable string with
`toLocaleDateString` and builds an avatar initial from the author name.

## Adding a Post

Append an object to `src/data/posts.json`:

```json
{
  "id": 13,
  "title": "Your Title",
  "author": "Author Name",
  "date": "2026-09-01",
  "category": "React",
  "content": "Post body text."
}
```

## Tech Stack

React 19, Vite 8, Oxlint, plain CSS
