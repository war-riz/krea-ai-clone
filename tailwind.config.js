/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  safelist: [
    // Ensure all gradient classes are included
    'bg-gradient-to-br',
    
    // All the specific gradient combinations
    'from-blue-50', 'to-indigo-100', 
    'from-blue-900/30', 'to-indigo-900/30',
    'from-amber-50', 'to-orange-100', 
    'from-amber-900/30', 'to-orange-900/30',
    'from-cyan-50', 'to-teal-100', 
    'from-cyan-900/30', 'to-teal-900/30',
    'from-emerald-50', 'to-green-100', 
    'from-emerald-900/30', 'to-green-900/30',
    'from-purple-50', 'to-violet-100', 
    'from-purple-900/30', 'to-violet-900/30',
    'from-green-50', 'to-lime-100', 
    'from-green-900/30', 'to-lime-900/30',
    'from-rose-50', 'to-pink-100', 
    'from-rose-900/30', 'to-pink-900/30',
    'from-indigo-50', 'to-blue-100', 
    'from-indigo-900/30', 'to-blue-900/30',
    
    // Icon wrapper backgrounds
    'bg-blue-500', 'bg-blue-600', 
    'bg-amber-500', 'bg-amber-600',
    'bg-cyan-500', 'bg-cyan-600', 
    'bg-emerald-500', 'bg-emerald-600',
    'bg-purple-500', 'bg-purple-600', 
    'bg-green-500', 'bg-green-600',
    'bg-rose-500', 'bg-rose-600', 
    'bg-indigo-500', 'bg-indigo-600',
    
    // Text colors
    'text-white',
    
    // Dark mode variants
    'dark:from-blue-900/30', 'dark:to-indigo-900/30',
    'dark:from-amber-900/30', 'dark:to-orange-900/30',
    'dark:from-cyan-900/30', 'dark:to-teal-900/30',
    'dark:from-emerald-900/30', 'dark:to-green-900/30',
    'dark:from-purple-900/30', 'dark:to-violet-900/30',
    'dark:from-green-900/30', 'dark:to-lime-900/30',
    'dark:from-rose-900/30', 'dark:to-pink-900/30',
    'dark:from-indigo-900/30', 'dark:to-blue-900/30',
    'dark:bg-blue-600', 'dark:bg-amber-600', 'dark:bg-cyan-600',
    'dark:bg-emerald-600', 'dark:bg-purple-600', 'dark:bg-green-600',
    'dark:bg-rose-600', 'dark:bg-indigo-600',
  ],
  
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;