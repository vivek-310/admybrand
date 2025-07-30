import { motion } from "framer-motion";
import Card from "./Card";

const Features = () => {
  const features = [
    {
      title: "AI Content Generation",
      description:
        "Generate engaging ad copy, social media posts, and marketing content in seconds.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Smart Campaign Optimization",
      description: "Automatically optimize your ad campaigns using machine learning algorithms.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Audience Insights",
      description: "Deep dive into your audience behavior with AI-powered analytics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Multi-Channel Management",
      description: "Manage all your marketing channels from a single, intuitive dashboard.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
    },
    {
      title: "Predictive Analytics",
      description: "Forecast campaign performance and identify trends before they happen.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports with actionable insights automatically.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  // Bento layout classes per item on large screens (6 columns)
  const layout = [
    "lg:col-span-3 lg:row-span-2", // big hero tile
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-2 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section
      id="features"
      className="relative py-16 sm:py-20 bg-black dark:bg-black overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-white mb-4">
            Powerful Features for Modern Marketing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 transition-colors duration-200">
            Everything you need to take your marketing to the next level with artificial intelligence.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6
            auto-rows-[10rem]
            gap-6 sm:gap-8
          "
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`${layout[i]} h-full`}
            >
              <Card
                variant="glass"
                className="
                  h-full p-5 sm:p-6 lg:p-7
                  bg-white/5 dark:bg-black/30 backdrop-blur-lg
                  hover:bg-white/10 dark:hover:bg-black/40
                  border border-white/10 dark:border-gray-700/50
                  transition-all duration-300
                  flex flex-col
                "
              >
                {/* Top row: icon + title */}
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-2 bg-white dark:bg-white text-black dark:text-black rounded-lg shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
                    {feature.title}
                  </h3>
                </div>

                {/* Description (push to bottom for tall tiles) */}
                <p className="mt-3 text-sm sm:text-base text-gray-400">
                  {feature.description}
                </p>

                {/* Optional CTA row for larger tiles */}
                {i === 0 || i === 3 ? (
                  <motion.div
                    className="mt-auto pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <a
                      href="#"
                      className="inline-flex items-center text-sm text-zinc-300 hover:text-white transition"
                    >
                      Learn more
                      <svg
                        className="ml-2 w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </motion.div>
                ) : null}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Background Elements (optional) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-10 -right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-light/10 dark:bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-48 sm:w-72 h-48 sm:h-72 bg-secondary-light/10 dark:bg-secondary/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
