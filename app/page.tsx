"use client";
import React, { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 bg-slate-900">
      <div className="w-full max-w-xl rounded-2xl shadow-2xl p-8 bg-slate-800 border border-slate-700 relative overflow-hidden">
        <h1 className="text-5xl font-extrabold mb-10 text-slate-100 tracking-tight drop-shadow-lg">
          Task Manager
        </h1>
        <form onSubmit={addTask} className="flex gap-3 mb-8">
          <input
            className="flex-1 bg-slate-700 border border-slate-600 focus:border-slate-400 text-slate-100 placeholder-slate-400 rounded-lg px-4 py-3 outline-none shadow-inner transition-all duration-200"
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="bg-slate-600 text-slate-100 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-500 hover:text-white transition-all duration-200"
          >
            Add
          </button>
        </form>
        <ul className="w-full space-y-3">
          {tasks.length === 0 && (
            <li className="text-slate-500 text-center py-8 select-none">
              No tasks yet.
            </li>
          )}
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-4 rounded-xl border border-slate-700 bg-slate-700 shadow-md transition-all duration-200 group ${
                task.completed ? "opacity-60 line-through" : ""
              }`}
            >
              <span className="text-lg text-slate-100 tracking-wide">
                {task.text}
              </span>
              <button
                onClick={() => toggleTask(task.id)}
                className={`ml-4 px-4 py-2 rounded-lg font-medium transition-all duration-200 border border-slate-500 ${
                  task.completed
                    ? "bg-slate-500 text-slate-200"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-600 hover:text-white"
                }`}
              >
                {task.completed ? "Completed" : "Mark Done"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 text-slate-500 text-xs opacity-60 tracking-widest">
        Task Manager &copy; 2025
      </div>
    </main>
  );
}
