"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      children={
        <>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-fuchsia-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-fuchsia-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="w-full max-w-sm rounded-2xl shadow-2xl p-10 bg-slate-800/90 border border-slate-700 flex flex-col items-center relative z-10 backdrop-blur-md">
            <h1 className="text-3xl font-extrabold mb-8 text-slate-100 tracking-tight text-center drop-shadow-lg">
              Sign in to <span className="text-blue-400">Task Manager</span>
            </h1>
            <button
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="flex items-center gap-3 bg-slate-900/90 text-slate-100 px-7 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-800 hover:scale-105 transition-all duration-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FaGithub size={20} />
              <span className="text-base">Sign in with GitHub</span>
            </button>
            <br />
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="flex items-center gap-3 bg-slate-900/90 text-slate-100 px-7 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-800 hover:scale-105 transition-all duration-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FcGoogle size={20} />
              <span className="text-base">Sign in with Google</span>
            </button>
            <div className="mt-8 text-slate-400 text-xs text-center opacity-80">
              We only use your GitHub and Google account for authentication.
              <br />
              Your data is safe and private.
            </div>
          </div>
        </>
      }
    />
  );
};

export default LoginPage;
