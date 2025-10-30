import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_10%_0%,rgba(99,102,241,0.18),transparent),radial-gradient(35%_35%_at_90%_10%,rgba(56,189,248,0.18),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white"
          >
            A glassy iPhone‑style platform for commerce and experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl"
          >
            Minimal, premium, and fluid — sell products, publish trips, manage bookings, and track performance with a silky, glassmorphic UI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#retail" className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 text-white px-5 py-3 font-medium shadow-lg shadow-zinc-900/10 hover:opacity-90 transition">Start selling</a>
            <a href="#analytics" className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl px-5 py-3 font-medium text-zinc-800 dark:text-zinc-100 dark:bg-white/5 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 transition">View analytics</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative h-[440px] md:h-[560px] rounded-[28px] border border-white/40 dark:border-white/10 overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
        >
          <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-zinc-950/50" />

          <div className="pointer-events-none absolute left-0 right-0 bottom-0 p-4 sm:p-6 flex justify-between">
            <div className="text-xs sm:text-sm text-zinc-700/80 dark:text-zinc-300/80 backdrop-blur-xl bg-white/40 dark:bg-zinc-900/40 px-3 py-2 rounded-xl">
              The fragrance of creativity • Interactive 3D
            </div>
            <div className="hidden sm:block text-xs text-zinc-700/80 dark:text-zinc-300/80 backdrop-blur-xl bg-white/40 dark:bg-zinc-900/40 px-3 py-2 rounded-xl">
              Powered by Spline
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
