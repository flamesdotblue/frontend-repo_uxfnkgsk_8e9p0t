import React from 'react';
import { ShoppingBag, Globe, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Feature = ({ icon: Icon, title, desc, tag }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.4 }}
    className="group relative rounded-2xl border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl p-6 hover:shadow-xl/40 hover:shadow-sky-500/10 transition-shadow"
  >
    <div className="flex items-start justify-between">
      <div className="size-11 rounded-2xl bg-gradient-to-tr from-sky-400/80 via-fuchsia-400/80 to-violet-400/80 p-[2px]">
        <div className="size-full rounded-[14px] bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-white/40 dark:border-white/10 grid place-items-center">
          <Icon className="size-5 text-sky-700" />
        </div>
      </div>
      <span className="text-[10px] uppercase tracking-wider text-zinc-600 dark:text-zinc-300 border border-white/40 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl px-2 py-1 rounded-full">{tag}</span>
    </div>
    <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
  </motion.div>
);

export default function Highlights() {
  return (
    <section className="relative" id="retail">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">Retail and Experiences, perfectly balanced</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-2xl">Launch a modern storefront for products and a captivating catalog for trips, guides, and unique services — all under one roof.</p>
          </div>
          <a href="#experiences" className="text-sm font-medium text-sky-800 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200">Explore experiences →</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon={ShoppingBag} title="Premium product listings" tag="Retail" desc="Variants, inventory, image galleries, shipping, and a frictionless checkout." />
          <Feature icon={Globe} title="Experiences & guides" tag="Experiences" desc="Itineraries, availability, bookings, and rich media to showcase moments." />
          <Feature icon={Shield} title="Secure & compliant" tag="Trust" desc="Role-based access, safe payments, and privacy-first account controls." />
          <Feature icon={Star} title="Glassy by default" tag="Design" desc="Frosted surfaces, soft shadows, and fluid animations that feel native on iPhone." />
        </div>
      </div>
    </section>
  );
}
