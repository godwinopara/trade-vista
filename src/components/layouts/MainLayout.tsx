import React from "react";
import Navbar from "../navbar/Navbar";

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<React.Fragment>
			<Navbar />
			<main>{children}</main>
		</React.Fragment>
	);
}
