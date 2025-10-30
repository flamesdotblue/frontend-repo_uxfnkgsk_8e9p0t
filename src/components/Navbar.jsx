import React from 'react';
import { Rocket, User, ShoppingBag, Globe, BarChart3 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200/60 dark:border-zinc-800"> 
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-xl bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-violet-500 p-[2px]">
            <div className="size-full rounded-[10px] bg-white dark:bg-zinc-950 grid place-items-center">
              <Rocket className="size-5 text-sky-600" />
            </div>
          </div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Aurelia</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-600 dark:text-zinc-300">
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2" href="#retail"><ShoppingBag className="size-4"/>Retail</a>
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2" href="#experiences"><Globe className="size-4"/>Experiences</a>
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2" href="#analytics"><BarChart3 className="size-4"/>Analytics</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
            <User className="size-4"/>
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition-opacity">
            Get started
          </button>
        </div>
      </nav>
    </header>
  );
}
