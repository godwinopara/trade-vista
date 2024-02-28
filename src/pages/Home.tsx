import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/home/Hero";
import { TickerTape } from "react-ts-tradingview-widgets";
import Partners from "../components/partners/Partners";

export default function Home() {
	return (
		<MainLayout>
			<Hero />
			<TickerTape></TickerTape>
			<Partners />
		</MainLayout>
	);
}
