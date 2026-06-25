# 🎓 Beginner React Course 2026

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A beginner-friendly React course focusing on core fundamentals: State, Effects, Routing, APIs, and project deployments.

## 📂 Folder Structure (Focusing on Lessons)

This structure organizes files logically, putting the core course material in the `src/lessons/` folder:

```text
reactadvanced/
├── src/
│   ├── lessons/
│   │   ├── Day1.jsx     # State: Counter App
│   │   ├── Day2.jsx     # Effects: Axios & Loading States
│   │   ├── Day3.jsx     # Routing: React Router v7
│   │   ├── Day4.jsx     # useRef: DOM Manipulation
│   │   ├── Day5.jsx     # useContext: Global State Management
│   │   ├── Day6.jsx     # useRef Advanced: Persistent Timers
│   │   └── Day7.jsx     # useMemo: Performance Optimization
│   ├── Pages/           # Route components (Home.jsx, About.jsx)
│   ├── shared/          # Shared layout components (Navbar.jsx)
│   │   └── Navbar.jsx   # Global Navigation Bar component
│   ├── App.css          # App-wide global styles
│   ├── App.jsx          # Route configuration mapping URLs to pages
│   ├── index.css        # Tailwind CSS imports & global rules
│   └── main.jsx         # React DOM root setup
├── .gitignore           # Git ignore list for untracked files
└── Readme.md            # Course overview and documentation (this file)
```

## 🛠️ Tech Stack & Dependencies

All project dependencies are declared in `package.json`:

- **React & React DOM (`v19.2.6`)**: Component state and rendering.
- **React Router DOM (`v7.17.0`)**: Single-page path routing.
- **Axios (`v1.17.0`)**: Asynchronous REST API fetching.
- **Tailwind CSS (`v4.3.0`)**: Global responsive styles.
- **Vite (`v8.0.12`)**: Dev server and compilation builder.

## 📚 Course Description

- **Day 1: Counter App (State)**: Teaches React functional state management, input handling, and error checks.
- **Day 2: Axios Fetching & Loading States (Effects)**: Teaches side-effects, asynchronous API requests (loading/error states), and component cleanup with `clearTimeout`/`clearInterval`.
- **Day 3: Routing & useContext (Routing/Global Context)**: Integrates `react-router-dom` for navigation, path routing, and global state handling using React Context.
- **Day 4: useRef Hook**: Deep dive into accessing DOM elements directly and keeping persistent values without triggering component re-renders.
- **Day 4v2: useRef vs useState**: An interactive comparison page showcasing the difference in component lifecycle and performance between state updates and reference changes.
- **Global Navigation Bar**: Standardizes user experience with a shared `Navbar` layout component routing to all lesson routes.

---

## ⚙️ Prerequisites

- **Advanced ES6+ JS**: API calling (fetch), Promises, timers, and DOM manipulation.
- **Tailwind CSS**: Familiarity with styling utilities.

---

## 🤝 Contributions & License

- **Contributions**: Pull requests are welcome. Feel free to open issues.
- **Queries**: Reach out via issues for any questions.
- **License**: Licensed under [MIT License](LICENSE).
