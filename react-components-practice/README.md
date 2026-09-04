# React Components Practice

A single-page React app assembled entirely from reusable, prop-driven
components. Built to practice props, composition, dynamic rendering, and
controlled forms.

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
├── App.jsx                  # composes every component
├── data/cards.js            # 6 service card objects
└── components/
    ├── Header.jsx
    ├── Card.jsx             # title, description, category, image, button
    ├── Button.jsx           # 3 variants + disabled state
    ├── Form.jsx             # controlled contact form with validation
    └── Footer.jsx
```

## Components

### Button

The most reused component in the project. Appears in the hero, the variants
demo, inside every card, and twice inside the form.

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `text` | string | `"Click"` | Label |
| `type` | string | `"button"` | `button`, `submit`, or `reset` |
| `variant` | string | `"primary"` | `primary`, `secondary`, or `danger` |
| `onClick` | function | — | Click handler |
| `disabled` | boolean | `false` | Disables the button |

The variant maps straight to a CSS class (`btn--primary`), so adding a fourth
style means adding one CSS rule, not touching the component.

### Card

Renders from `src/data/cards.js` via `.map()` with `card.id` as the key. Data
lives in its own file, so the six cards can be edited, reordered, or extended
without opening a component.

### Form

A controlled form: React state is the single source of truth for all three
fields.

- One `formData` object holds `name`, `email`, and `message`; `handleChange`
  updates the right key using the input's `name` attribute
- `validateField` runs per-field rules (required, minimum length, email
  pattern); `validateAll` runs them across the whole form on submit
- Errors clear as soon as the user starts typing in the offending field
- Errors render with `role="alert"` so screen readers announce them
- On successful submit the form swaps to a success state via conditional
  rendering, with a button to reset and send another message
- `noValidate` on the form element disables browser validation so the custom
  messages are the ones shown

There is no backend. Submission is simulated locally.

## Tech Stack

React 19, Vite 8, Oxlint, plain CSS
