# 🔍 GitHub User Finder (React + Vite)

A responsive and interactive web application built with **React.js (Vite)** that allows users to search for GitHub users and view their detailed profiles. It uses the **GitHub Users API** and demonstrates modern React features like hooks, conditional rendering, and live search with debouncing.

---

## ✨ Features

- 🔎 **Live Search** with debouncing
- 👤 **User Cards** displaying avatar, username, and a clickable view button
- 📄 **Detailed Profile View** including:
  - Full name (if available)
  - Bio
  - Public repositories count
  - Followers & Following
  - GitHub profile link
- 🎨 Responsive UI using **Tailwind CSS**

---

## ⚙️ Tech Stack

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub REST API](https://docs.github.com/en/rest)

---

## 🚀 Getting Started (Run Locally)

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/github-user-finder.git
cd github-user-finder

##2. Install Dependencies

npm install

##3. Run the App in Dev Mode

npm run dev
Open your browser at: http://localhost:5173

##📁 Folder Structure

src/
├── components/
│   ├── SearchBar.jsx
│   ├── UserCard.jsx
│   └── UserDetails.jsx
├── App.jsx
└── main.jsx

