import { memo } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#" },
  { label: "Support", href: "#" },
  { label: "Add a resource", href: "#" },
  { label: "feedback", href: "#" },
  { label: "Contribute", href: "#" },
  { label: "Legal", href: "#" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Arrow = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

function Footer() {
  return (
    <footer className="relative bg-black text-zinc-200 overflow-hidden">
      {/* Giant background word */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="pointer-events-none select-none absolute inset-x-0 top-0 z-0 flex justify-center"
      >
        <div className="w-full max-w-7xl px-6">
          <div
            className="
              leading-none font-extrabold tracking-tight uppercase
              text-[#27282a]
              text-[20vw] sm:text-[16vw] md:text-[12vw]
            "
          >
            ADmyBRAND
          </div>
        </div>
      </motion.div>

      {/* Subtle ambient blobs */}
      <motion.div
        className="absolute -top-10 -right-10 w-72 h-72 bg-fuchsia-500/10 blur-3xl rounded-full z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-12 -left-12 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full z-0"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.14, 0.08, 0.14] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content (above background word/blobs) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:gap-24">
            {/* Left: credit & optional badge */}
            <div className="flex items-center gap-4">
              <p className="text-sm text-zinc-400">
                Made &amp; Curated by{" "}
                <a
                  href="#"
                  className="text-zinc-100 hover:text-white underline decoration-white/30 underline-offset-4"
                >
                  admybrand
                </a>
              </p>

              {/* Product Hunt badge placeholder (optional) */}
              <a
                href="#"
                className="hidden sm:inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 hover:text-white hover:bg-white/10 transition"
              >
                Product Hunt
              </a>
            </div>

            {/* Right: links in two lines (3 per row on md+) */}
            <nav
              className="
                mt-6 md:mt-0 md:ml-auto
                grid grid-cols-2 md:grid-cols-3
                gap-x-8 gap-y-3
                w-full md:max-w-xl
              "
            >
              {links.map((l) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  className="group inline-flex items-center text-lg text-zinc-400 hover:text-white transition"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative">
                    {l.label}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white/60 transition-all group-hover:w-full" />
                  </span>
                  <Arrow className="ml-1.5 w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition" />
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="mt-6 text-xs text-zinc-500">
            © {new Date().getFullYear()} Pillarstack‑style footer.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default memo(Footer);
