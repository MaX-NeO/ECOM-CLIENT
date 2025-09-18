# ECOM-CLIENT 

# React Frontend App — README -JS with Bootstrap

> Step-by-step developer documentation for creating a React frontend app using Vite (React + JavaScript), with Router, Axios, React-Bootstrap, Bootstrap and Sonner for toasts.

---

## Table of contents

1. [Prerequisites](#prerequisites)
2. [Create the project (Vite)](#create-the-project-vite)
3. [Install dependencies](#install-dependencies)
4. [Project setup (important imports & wrappers)](#project-setup-important-imports--wrappers)
5. [Run the dev server](#run-the-dev-server)
6. [Build & preview for production](#build--preview-for-production)
7. [Common snippets (Router, Axios, Sonner, React-Bootstrap)](#common-snippets-router-axios-sonner-react-bootstrap)
8. [Project structure (suggested)](#project-structure-suggested)


---

## Prerequisites

1. **Install Node.js 22**

   * Download and install Node.js 22 from the official site or use a version manager:

     * Using the Node website: [https://nodejs.org/](https://nodejs.org/)


2. **Confirm npm is installed**

   ```bash
   npm -v
   ```

   * This command prints the installed npm version. If `npm` isn't found after installing Node, ensure your PATH is set correctly or re-open the terminal. `npm` is included with Node installations.

---

## Create the project (Vite)

You can create a Vite + React project interactively or non-interactively.

**Interactive (recommended for beginners):**

```bash
npx create-vite@latest
# or
npm create vite@latest
```

Follow the prompts:

* Provide `app-name` (for example: `my-app`)
* Select **React**
* Select **JavaScript** (not TypeScript)

**Non-interactive (one-liner):**

```bash
# using npm create (non-interactive):
npm create vite@latest my-app -- --template react

# or with npx (also works):
npx create-vite@latest my-app --template react
```

Then:

```bash
cd my-app
npm install
```

> Note: `react` template = JavaScript. If you want TypeScript, use `react-ts` instead.

---

## Install dependencies

From the project root run:

```bash
npm install react-router-dom@6 axios react-bootstrap bootstrap sonner
```

What these packages do:

* **react-router-dom\@6** — routing/navigation for your single-page app (declarative routes, nested routes).
* **axios** — promise-based HTTP client for API requests.
* **react-bootstrap** — React components that wrap Bootstrap styles and JS behavior.
* **bootstrap** — the underlying CSS framework (make sure to import its CSS).
* **sonner** — lightweight toast/notification library for React.

Some notes:

* `react-bootstrap` only provides components; ensure `bootstrap`'s CSS is imported (see next section).
* You can pin versions if you want reproducibility, e.g. `react-router-dom@6.18.0` — but `@6` ensures v6.x.

---

## Project setup (important imports & wrappers)

Open `src/main.jsx` (or `src/main.js`) and add the required global imports and wrappers.

Example `src/main.jsx`:

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Bootstrap CSS (must be imported once at app entry)
import 'bootstrap/dist/css/bootstrap.min.css'

// Sonner (toasts)
import { Toaster } from 'sonner'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster /> {/* Toaster can be placed near root so toasts are available app-wide */}
    </BrowserRouter>
  </React.StrictMode>
)
```

---

## Run the dev server

Start the Vite dev server:

```bash
npm run dev
```

* Vite prints a local URL (by default `http://localhost:5173`) — open it in your browser.
* HMR (Hot Module Replacement) updates the page instantly when you change code.

---

## Build & preview for production

```bash
npm run build
npm run preview
```

* `npm run build` creates an optimized production bundle in `dist/`.
* `npm run preview` serves the built app locally so you can test the production build.

---

## Common snippets — copy these into your project

### 1) Basic Router setup (`src/App.jsx`)

```jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}
```

### 2) Axios instance (`src/lib/api.js`)

```js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true,
})

export default api
```

Usage example:

```js
import api from './lib/api'

async function fetchUsers() {
  const res = await api.get('/users')
  return res.data
}
```

### 3) Sonner (toasts)

```jsx
import { toast } from 'sonner'

function SaveButton() {
  return (
    <button onClick={() => toast.success('Saved successfully!')}>Save</button>
  )
}
```

Remember to keep `<Toaster />` mounted at the root (`src/main.jsx`) so toasts render.

### 4) React-Bootstrap example

```jsx
import { Button, Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="py-4">
      <h1>Hello</h1>
      <Button variant="primary">Primary action</Button>
    </Container>
  )
}
```



---

## Project structure (suggested)

```
my-app/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  └─ About.jsx
│  ├─ api/
│  │  └─ api.js
│  ├─ App.jsx
│  └─ main.jsx
├─ .env
├─ package.json
└─ vite.config.js
```

---

## Troubleshooting & tips

* **`npx` permission or EACCES errors**: Use `nvm` and install Node via `nvm` (fixes permission problems), or use `sudo` only when necessary.
* **Port already in use**: Start Vite on another port: `npm run dev -- --port 3000` or set `PORT` env variable.
* **CSS not applied**: Ensure `import 'bootstrap/dist/css/bootstrap.min.css'` is in `main.jsx` (only once).
* **React-Bootstrap components not interactive**: Make sure you're using React-Bootstrap components (they re-create the JS behavior without jQuery). You don’t need the separate `bootstrap/js` import for basic features.
* **Axios CORS issues**: Check the server CORS policy or use a proxy in development.
* **Sonner toasts not showing**: Confirm `<Toaster />` is mounted (usually at root) and you call `toast(...)` from components.

---



