import React from 'react';
import { Rocket, User, ShoppingBag, Globe, BarChart3 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/50 dark:bg-zinc-900/40 border-b border-white/30 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-2xl bg-gradient-to-tr from-sky-400/70 via-fuchsia-400/70 to-violet-400/70 p-[2px]">
            <div className="size-full rounded-[14px] bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-white/40 dark:border-white/10 grid place-items-center">
              <Rocket className="size-5 text-sky-700" />
            </div>
          </div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Aurelia</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-700 dark:text-zinc-300">
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2" href="#retail"><ShoppingBag className="size-4"/>Retail</a>
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2" href="#experiences"><Globe className="size-4"/>Experiences</a>
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2" href="#analytics"><BarChart3 className="size-4"/>Analytics</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl px-3 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-100 hover:bg-white/60 dark:hover:bg-white/10 transition-colors">
            <User className="size-4"/>
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-zinc-900/90 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-zinc-900/5 hover:bg-zinc-900 transition-colors">
            Get started
          </button>
        </div>
      </nav>
    </header>
  );
}
