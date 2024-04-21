/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
			backgroundColor: {
				primary: "#0064fa",
				"primary-hover": "#0052cc",
			},
			backgroundImage: {
				// gradient: "linear-gradient(to bottom,var(--white),var(--primary-50))",
				authImg: "url('/src/images/authImg.jpg')",
			},
			colors: {
				gray1: "#f7f6fe",
				primary: "#0064fa",
				"primary-hover": "#0052cc",
				secondary: "#eef0f3",
				dark: "#1d2023",
				gray2: "#1b2429",
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
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
