import { Link } from "react-router-dom";
// import { TfiClose } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
	return (
		<nav className="px-6 py-6 shadow-sm fixed top-0 z-50 bg-white w-full">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				<div>
					<Link to="/">INVESTINSPIRE</Link>
				</div>
				<div className="text-2xl cursor-pointer">
					<RxHamburgerMenu />
				</div>
				{/* <NavItem /> */}
			</div>
		</nav>
	);
}
