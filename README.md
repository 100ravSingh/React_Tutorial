# React Beginner Learning – README

## 🚀 Getting Started with React (Using Vite)

This project is created to help beginners understand the basics of **React**, including components, JSX, and project structure.

---

## 📦 Prerequisites

Before starting, make sure you have:

- **Node.js** installed  
  Download from: https://nodejs.org  
- A code editor (**VS Code** recommended)

Check Node:

```bash
node -v
npm -v
````

---

## 🛠️ Create a New React Project (Vite)

Run the following command in your terminal:

```bash
npm create vite@latest my-react-app -- --template react
```

Then:

```bash
cd my-react-app
npm install
npm run dev
```

Your React app will start at:

```
http://localhost:5173/
```

---

## 📁 Project Structure

```
my-react-app/
 ├── src/
 │   ├── App.jsx        # Main React component
 │   ├── main.jsx       # Entry point
 │   └── assets/        # Images & static files
 ├── index.html         # HTML template
 ├── package.json       # Dependencies & scripts
 └── vite.config.js     # Vite configuration
```

---

## 🧩 Your First React Component

Edit `src/App.jsx`:

```jsx
function App() {
  return <h1>Hello React 🚀</h1>;
}

export default App;
```

---

## 🧱 Creating a New Component

Create: `src/Message.jsx`

```jsx
function Message() {
  return <p>This is a message component.</p>;
}

export default Message;
```

Use it inside `App.jsx`:

```jsx
import Message from "./Message";

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Message />
    </div>
  );
}

export default App;
```

---

## 📚 What You Will Learn

* What React is
* JSX basics
* Functional components
* Rendering UI
* Project structure
* Using Vite for development

---

## 📌 Next Steps

* Learn JSX deeply
* Learn props
* Learn React state
* Build multiple components
* Create your first mini React project

