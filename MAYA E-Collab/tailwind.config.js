/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-gray-300': 'rgba(41, 41, 41, 0.3)',
        'custom-gray-200': 'rgba(35, 35, 35, 0.1)',
        'base-white': 'var(--Base-Base-White, #FAFAFA)',
        lightCyan: "hsla(185, 100%, 98%, 1)",
        "laara-primary": "#0466C8",
        "laara-secondary": "#F4FEFF",
        "warning-300": "#CC7914",
        "warning-200": "#EDA145",
        success: "#15B097", //#FFA500
        loginPage: "#F3FEFF",
        pending: "#FFA500",
        "checked-in": "#4CAF50",
        completed: "#008080",
        "awaiting-review": "#800080",
        error: "#E4626F",

        border: "hsl(var(--border))",
        borderColor: {
          'custom-gray': 'rgba(98, 98, 98, 0.2)', 
        },
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
      backgroundImage: {
        "ruby-vector": "url('/src/assets/ruby/rubyBG.jpg')",
        banner1: "url('/src/assets/bookings/WEB BANNER 44.jpg')",
        banner2: "url('/src/assets/bookings/banner 2.jpg')",
        banner3: "url('/src/assets/bookings/WEB BANNER 46.jpg')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      boxShadow: {
        'custom-lg': '0px 20px 52px 5px hsla(0, 0%, 0%, 0.34)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};