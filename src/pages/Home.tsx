import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/home/Hero";
import { TickerTape } from "react-ts-tradingview-widgets";
import Partners from "../components/partners/Partners";
import Stats from "../components/home/Stats";

export default function Home() {
	return (
		<MainLayout>
			<Hero />
			<Stats />
			<TickerTape></TickerTape>
			<Partners />
		</MainLayout>
	);
}
