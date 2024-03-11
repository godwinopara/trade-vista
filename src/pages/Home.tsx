import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/home/Hero";
import { TickerTape } from "react-ts-tradingview-widgets";
import Partners from "../components/partners/Partners";
import Stats from "../components/home/Stats";
import Steps from "../components/home/Steps";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AssetsYouCanTrade from "../components/home/AssetsYouCanTrade";
import Features from "../components/home/Features";

export default function Home() {
	return (
		<MainLayout>
			<Hero />
			<Stats />
			<TickerTape></TickerTape>
			<WhyChooseUs />
			<Features />
			{/* <Partners /> */}
			<AssetsYouCanTrade />
			<Steps />
		</MainLayout>
	);
}
