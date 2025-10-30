import React from 'react';
import { BarChart3, TrendingUp, ShoppingBag, Globe, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

function MiniStat({ icon: Icon, label, value, delta, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl p-4"
    >
      <div className="flex items-center justify-between">
        <div className={`size-8 rounded-xl grid place-items-center text-white ${color}`}>
          <Icon className="size-4" />
        </div>
        <span className="text-xs text-zinc-600 dark:text-zinc-300">{delta}</span>
      </div>
      <div className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-white">{value}</div>
      <div className="text-xs text-zinc-600 dark:text-zinc-300">{label}</div>
    </motion.div>
  );
}

function LineChart() {
  const points = [5, 14, 9, 18, 13, 22, 26, 19, 28, 32, 27, 36];
  const width = 520;
  const height = 160;
  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * (width - 20) + 10;
      const y = height - (p / max) * (height - 20) - 10;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
      <defs>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
      </defs>
      <path d={path} fill="none" stroke="url(#grad)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
      </linearGradient>
      <path d={`${path} L ${width} ${height} L 0 ${height} Z`} fill="url(#area)" opacity="0.2" />
    </svg>
  );
}

export default function DashboardPreview() {
  return (
    <section id="analytics" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">A dashboard that feels alive</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-2xl">Real-time insights across retail and experiences: sales, views, engagement, and conversion trends — visualized beautifully.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
            <BarChart3 className="size-4" />
            Live metrics
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-2xl p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-zinc-600 dark:text-zinc-300">Revenue (Last 30 days)</div>
                <div className="text-3xl font-semibold text-zinc-900 dark:text-white">$82,940</div>
              </div>
              <div className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100/70 dark:text-emerald-300 dark:bg-emerald-400/10 px-2.5 py-1 rounded-full text-xs">
                <TrendingUp className="size-4" /> 12.4%
              </div>
            </div>
            <div className="mt-4">
              <LineChart />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <MiniStat icon={ShoppingBag} label="Total sales" value="1,342" delta="↑ 8.1%" color="bg-sky-500" />
            <MiniStat icon={Globe} label="Bookings" value="286" delta="↑ 5.6%" color="bg-violet-500" />
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MiniStat icon={TrendingUp} label="Conversion rate" value="3.24%" delta="↑ 0.3%" color="bg-emerald-500" />
          <MiniStat icon={Heart} label="Likes & saves" value="9,120" delta="↑ 14%" color="bg-rose-500" />
          <MiniStat icon={BarChart3} label="Top viewed" value="Aurora Trek" delta="+2.1k" color="bg-amber-500" />
          <MiniStat icon={BarChart3} label="Least viewed" value="Coastal Kayak" delta="-120" color="bg-zinc-700" />
        </div>
      </div>
    </section>
  );
}
