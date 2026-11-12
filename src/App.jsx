// Brings in the motion tool that adds animations to normal HTML elements
import { motion } from 'motion/react'
// Brings in a small arrow icon shown on the right side of each button
import { FiArrowUpRight } from 'react-icons/fi'
// Brings in the liquid glass logo animation we added with shadcn
import { LiquidGlassLogo } from './components/liquid-glass-logo'
// Brings in the list of links we made in links.js
import links from './links'

// The company website address, used by the logo and the company name badge
const websiteUrl = 'https://www.gtllanka.com/'

// Animation settings for the whole list of buttons
const listAnimation = {
  // Starting state: nothing special needed for the list itself
  hidden: {},
  // Final state: reveal each button one after another
  show: {
    // Timing settings for the reveal
    transition: {
      // Wait 0.25 seconds between each button appearing
      staggerChildren: 0.25,
      // Wait 1 second before the first button appears (so the text shows first)
      delayChildren: 1,
    },
  },
}

// Animation settings for each single button
const itemAnimation = {
  // Starting state: invisible and pushed 20px down
  hidden: { opacity: 0, y: 20 },
  // Final state: fully visible in its normal spot, taking 0.8 seconds
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

// The main component of the app; whatever it returns is shown on the page
function App() {
  // Return the content to display
  return (
    // Full-screen page (at least the full device height), dark forest-green gradient, white text, layout in a column
    <main className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-linear-to-br from-emerald-950 via-green-950 to-emerald-900 font-sans text-white">
      {/* Layer for background decorations; clicks pass straight through it */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft emerald glow in the top-left corner */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
        {/* Soft light-green glow in the bottom-right corner */}
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-green-300/10 blur-3xl" />
      </div>

      {/* Main content area: starts at the top on phones (small top padding); side by side and centred on large screens */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-start gap-10 px-5 pb-10 pt-4 sm:px-8 lg:flex-row lg:justify-between lg:gap-16 lg:py-10">
        {/* Brand side (not animated itself): holds the logo and the animated text */}
        <section className="flex flex-col items-center text-center lg:max-w-md lg:items-start lg:text-left">
          {/* Wrapper for the logo: pulled up a little (-mt-6) and the text pulled closer below (-mb-6) */}
          <div className="relative -mb-6 -mt-6">
            {/* Soft round green glow behind the logo (smaller than the box so no edges show) */}
            <div className="absolute inset-10 rounded-full bg-emerald-400/40 blur-2xl" />
            {/* Link around the logo: opens the website in a new tab */}
            <a
              // The website address set at the top of the file
              href={websiteUrl}
              // Open the site in a new tab so this page stays open
              target="_blank"
              // Safety setting that should always go with target="_blank"
              rel="noopener noreferrer"
              // Text read out by screen readers for this link
              aria-label="Visit the GTL Lanka website"
              // Makes the link a block that sits above the glow
              className="relative block"
            >
              {/* Plain see-through box that sets the logo's size: bigger on each larger screen */}
              <div className="h-56 w-56 sm:h-64 sm:w-64 lg:h-100 lg:w-100">
                {/* The liquid glass logo animation (runs on its own, no fade-in) */}
                <LiquidGlassLogo
                  // Your logo file from the public folder
                  logo="/logo.png"
                  // The animation finishes on the logo alone (not a text wordmark)
                  ending="logo"
                  // Dark style to suit the dark green page
                  theme="dark"
                  // Logo shown at full size inside the tile
                  logoScale={1}
                  // Keep the logo's own colours
                  logoColor="original"
                  // Colour of the glass tile
                  tileColor="#6e9db3"
                  // See-through background so the page's green shows behind the logo
                  background="transparent"
                  // How quickly the ripple effect fades out
                  decay={1.5}
                  // Plays at half speed for a smooth, calm effect
                  speed={0.5}
                  // Fills the full height of its box
                  height="100%"
                  // Name read out by screen readers
                  aria-label="GTL logo"
                />
              </div>
            </a>
          </div>

          {/* Animated box for the text only: sits on a higher layer (z-10) so the logo animation never covers it */}
          <motion.div
            // Start invisible and 20px lower
            initial={{ opacity: 0, y: 20 }}
            // Animate to fully visible in its normal spot
            animate={{ opacity: 1, y: 0 }}
            // Takes 1.2 seconds, after waiting 0.3 seconds
            transition={{ duration: 1.2, delay: 0.3 }}
            // Higher layer than the logo; stack the text pieces; centred on phones, left-aligned on large screens
            className="relative z-10 flex flex-col items-center lg:items-start"
          >
            {/* Pill-shaped company name badge that links to the website; gets brighter on hover */}
            <a
              // The website address set at the top of the file
              href={websiteUrl}
              // Open the site in a new tab so this page stays open
              target="_blank"
              // Safety setting that should always go with target="_blank"
              rel="noopener noreferrer"
              // Pill shape, soft green glass look, brighter background and border on hover
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-emerald-200 transition-colors duration-300 hover:border-emerald-300 hover:bg-emerald-400/25"
            >
              {/* Small glowing dot that pulses */}
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {/* Badge text */}
              Global Transportation & Logistics Pvt Ltd
            </a>
            {/* The slogan: always one line (never wraps), italic, light green, grows on bigger screens */}
            <p className="mt-3 whitespace-nowrap text-sm font-semibold italic tracking-wide text-emerald-300 sm:text-lg lg:text-xl">
              {/* The slogan text */}
              One World... One Link... One Choice
            </p>

            {/* Main heading; bigger on larger screens */}
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {/* First part of the heading in white */}
              Let's stay{' '}
              {/* Second part with a light-green gradient fill */}
              <span className="bg-linear-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
                {/* The highlighted word */}
                connected
              </span>
            </h1>

            {/* Short description in soft, slightly see-through light green */}
            <p className="mt-4 max-w-sm text-sm text-emerald-100/70 sm:text-base">
              {/* The description text */}
              Stay connected with Global Park! Follow our social media pages to keep up with our latest news, updates and milestones.
            </p>
          </motion.div>
        </section>

        {/* Links side: all the buttons stacked with gaps, using the list animation */}
        <motion.div
          // Use the list animation settings defined at the top
          variants={listAnimation}
          // Begin in the "hidden" state
          initial="hidden"
          // Animate to the "show" state on page load
          animate="show"
          // Full width up to a max, buttons in a column, bigger gaps on larger screens
          className="flex w-full max-w-md flex-col gap-3 sm:gap-4"
        >
          {/* Go through every link in links.js and make a button for each one */}
          {links.map((link) => {
            // Store the icon in a capitalised name so React can show it as a component
            const Icon = link.icon
            // Return the button for this link
            return (
              // An animated link (<a>) that goes to the site
              <motion.a
                // A unique key so React can keep track of each button
                key={link.name}
                // The web address this button opens
                href={link.url}
                // Open the site in a new tab so this page stays open
                target="_blank"
                // Safety setting that should always go with target="_blank"
                rel="noopener noreferrer"
                // Use the single-button animation settings defined at the top
                variants={itemAnimation}
                // On hover: lift up 3px
                whileHover={{ y: -3 }}
                // When tapped or clicked: shrink slightly like a real button press
                whileTap={{ scale: 0.97 }}
                // Glass look by default; turns solid white with a green border on hover
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-emerald-300 hover:bg-white sm:p-4"
              >
                {/* Square in the platform's own brand colour (from links.js); white icon; thin outline; grows on hover */}
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl text-white shadow-md ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110 ${link.color}`}>
                  {/* The brand icon itself */}
                  <Icon />
                </span>
                {/* Text area that takes up the remaining space */}
                <span className="min-w-0 flex-1 text-left">
                  {/* Platform name: white by default, dark green on hover */}
                  <span className="block font-semibold text-white transition-colors duration-300 group-hover:text-emerald-950">
                    {/* The platform name */}
                    {link.name}
                  </span>
                  {/* Small line under it; cut off with "..." if too long for small phones */}
                  <span className="block truncate text-sm text-emerald-100/60 transition-colors duration-300 group-hover:text-emerald-700">
                    {/* The handle or short description */}
                    {link.handle}
                  </span>
                </span>
                {/* Arrow on the right: turns green and nudges up-right on hover */}
                <FiArrowUpRight className="shrink-0 text-xl text-emerald-200/50 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-600" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>

      {/* Footer that always sits at the bottom of the screen */}
      <footer className="relative z-10 border-t border-white/10 py-5 text-center text-xs text-emerald-100/50">
        {/* Shows © plus the current year automatically, then the company name */}
        © {new Date().getFullYear()} GTL Lanka. All rights reserved.
      </footer>
    </main>
  )
}

// Makes App available so main.jsx can load it onto the page
export default App