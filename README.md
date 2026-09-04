# Internship Assignments

Frontend projects completed as part of my Full Stack Developer (MERN) internship
at Skill Nexis. Three assignments covering static web development, React
component design, and state-driven UI.

| Project | Stack | Focus |
|---|---|---|
| [Portfolio](#1-portfolio) | HTML5, CSS3 | Responsive layout, semantic markup |
| [React Blog UI](#2-react-blog-ui) | React 19, Vite | State, filtering, conditional rendering |
| [React Components Practice](#3-react-components-practice) | React 19, Vite | Props, composition, controlled forms |

---

## 1. Portfolio

A responsive personal portfolio built with plain HTML and CSS, no frameworks or
build step. Eight sections: hero, about, skills, education, projects, courses,
languages, and contact.

**Run:** open `Portfolio/index.html` in any browser.

---

## 2. React Blog UI

A blog listing interface. Twelve posts are loaded from a local JSON file and
filtered live by search term and category.

**Components:** `Header`, `SearchBar`, `BlogList`, `BlogCard`

**What it demonstrates**
- `useState` for search term and selected category
- Derived state: categories are computed from the post data with a `Set`, so
  adding a new category to `posts.json` needs no code change
- Combined filtering across title, content, and category
- Conditional rendering of an empty state when nothing matches
- Lifting state to `App` and passing handlers down as props

**Run**

```bash
cd react-blog-ui
npm install
npm run dev
```

---

## 3. React Components Practice

A single-page app assembled entirely from reusable, prop-driven components. Six
service cards render from a data file, and a contact form handles its own
validation.

**Components:** `Header`, `Card`, `Button`, `Form`, `Footer`

**What it demonstrates**
- `Button` with three style variants plus a disabled state, reused across the
  page including inside the form
- Dynamic rendering of cards with `.map()` and stable `key` props
- Controlled form inputs with per-field validation, inline error messages, and
  errors that clear as the user types
- Conditional rendering of a success state after submit
- Separation of data (`src/data/cards.js`) from presentation

**Run**

```bash
cd react-components-practice
npm install
npm run dev
```

---

## Tech Stack

HTML5, CSS3, JavaScript (ES6+), React 19, Vite 8, Oxlint

## Build and Lint

Both React projects build clean and pass linting:

```bash
npm run build
npm run lint
```

## Author

Shreyas Limbikai
B.Tech Computer Science and Engineering, DKTE's Textile and Engineering Institute
