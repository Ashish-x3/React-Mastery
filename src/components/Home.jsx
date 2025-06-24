// src/components/Home.jsx
export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center">
        <div className="p-8  bg-slate-100 w-100 dark:bg-slate-800 rounded-lg transition-colors duration-200">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Welcome 👋🏻</h1>

      <div className="mt-4 p-4 border dark:bg-blue-900  bg-blue-300 border-gray-300 dark:border-blue-600 rounded">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
          This App contains React Machine Coding Practice Questions
        </h2>
      </div>

      <details>
        <summary>Beginner</summary>
        <ul>
          <li><a href="/beginner/counter">Counter</a></li>
          <li><a href="/beginner/todo-list">Todo List</a></li>
          <li><a href="/beginner/toggle-switch">Toggle Switch</a></li>
        </ul>
      </details>
    </div>
    </div>
    
  );
}
