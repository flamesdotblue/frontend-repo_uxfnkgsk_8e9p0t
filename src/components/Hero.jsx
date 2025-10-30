import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white"
          >
            Sell Products and Experiences in One Premium Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl"
          >
            Build a beautiful storefront for retail and a dynamic booking engine for trips and guides — with dashboards, analytics, and a seamless checkout.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#retail" className="inline-flex items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-3 font-medium shadow-sm hover:opacity-90 transition">Start selling</a>
            <a href="#analytics" className="inline-flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 px-5 py-3 font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">View analytics</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative h-[420px] md:h-[520px] rounded-2xl border border-zinc-200/70 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-950"
        >
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-zinc-950/50" />

          <div className="pointer-events-none absolute left-0 right-0 bottom-0 p-4 sm:p-6 flex justify-between">
            <div className="text-xs sm:text-sm text-zinc-700/80 dark:text-zinc-300/80 backdrop-blur bg-white/40 dark:bg-zinc-900/40 px-3 py-2 rounded-lg">
              Iridescent identity card • Interactive 3D
            </div>
            <div className="hidden sm:block text-xs text-zinc-700/80 dark:text-zinc-300/80 backdrop-blur bg-white/40 dark:bg-zinc-900/40 px-3 py-2 rounded-lg">
              Powered by Spline
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
