/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#5235e8",
				"primary-hover": "#3e26bb",
			},
			backgroundImage: {
				gradient: "linear-gradient(to bottom,var(--white),var(--primary-50))",
			},
		},
	},
	plugins: [],
};
