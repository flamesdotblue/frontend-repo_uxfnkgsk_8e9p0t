import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import DashboardPreview from './components/DashboardPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 [--ring:theme(colors.sky.500)]">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <div id="experiences" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 mb-2 text-sm text-zinc-500 dark:text-zinc-400">Curate trips, publish guides, and manage availability.</div>
        </div>
        <DashboardPreview />
      </main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Aurelia — All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors" href="#retail">Retail</a>
            <a className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors" href="#experiences">Experiences</a>
            <a className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors" href="#analytics">Analytics</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
