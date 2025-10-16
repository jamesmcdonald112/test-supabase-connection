# ⏱️ Pomodoro Timer App

A sleek, offline-ready Pomodoro timer built with **React, TypeScript, Vite, and Tailwind CSS**.  
Features test-driven development, CI workflows, and GitHub project tracking — built to simulate a professional workflow.

![CI - Tests](https://github.com/jamesmcdonald112/pomodoro/actions/workflows/test.yml/badge.svg)
![CI - PR Title Check](https://github.com/jamesmcdonald112/pomodoro/actions/workflows/pr-title.yml/badge.svg)

---

## 🚀 Features
- Start, Pause, and Resume timer with a clear circular UI.
- Reset button to restore timer to 25:00.
- Persistent state via local storage.
- Offline support with service worker (planned).
- Accessibility: keyboard operable, focus-visible styles, screen reader-friendly labels.
- TDD setup with Vitest + React Testing Library.

---

## 🛠️ Tech Stack
- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Testing:** Vitest, React Testing Library, jsdom
- **CI/CD:** GitHub Actions (tests + PR title linting)
- **Project Management:** GitHub Issues, Milestones, Project Board

---

## 📦 Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Installation
```bash
git clone https://github.com/jamesmcdonald112/pomodoro.git
cd pomodoro
npm install
```

### Development
```bash
npm run dev
```

### Testing 
```bash
npm test
```

⸻

### 🗺️ Roadmap
- Start button & basic countdown logic
- Reset button
- Break phases (short/long)
- Offline support with service worker
- Task grouping & persistence with accounts

⸻

### 📌 Project Management
- Issues
- Project Board
- Milestones

⸻

### 🤝 Contributing
1. Fork the repo
2. Create a feature branch (git checkout -b feat/your-feature)
3. Commit with Conventional Commits style
4. Push and open a Pull Request

⸻

### 📄 License

MIT License – free to use and modify.
