import { Link } from "react-router-dom";
import heroImage from "../../images/heroImg.webp";

export default function Hero() {
	return (
		<section className="mt-20 min-h-[85vh] max-w-7xl mx-auto flex justify-between gap-x-10 items-center">
			<div className="">
				<span className="text-xl block mb-10 text-gray-500">BREAK THROUGH BREAK FREE</span>
				<h1 className="text-6xl font-bold mb-5 tracking-wide leading-[120%]">
					The Most Efficient Forex Trading and Investment Platform
				</h1>
				<p className="text-lg text-gray-500 mb-10">
					All-in-one crypto wallet and trading platform provides you with the tools <br /> and
					security you need to manage, trade, and grow your digital assets.
				</p>
				<div className="flex items-center gap-x-8">
					<Link to="/signup" className="border border-black py-3 px-8 block rounded-md">
						Sign Up
					</Link>
					<Link
						to="/signin"
						className="bg-primary py-3 px-8 block hover:bg-primary-hover text-white rounded-md"
					>
						Get Started
					</Link>
				</div>
			</div>
			<div>
				<img src={heroImage} alt="hero" className="" />
			</div>
		</section>
	);
}
