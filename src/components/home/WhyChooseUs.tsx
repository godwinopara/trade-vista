import spreads from "../../images/spread.webp";
import cfd from "../../images/cfd.webp";
import broker from "../../images/trusted-broker.webp";
import reliable from "../../images/reliable.jpeg";

export default function WhyChooseUs() {
	return (
		<section className="max-w-7xl mx-auto my-20">
			<div className="text-center mb-10">
				<h3 className="uppercase mb-4 text-lg">Why InvestInspire?</h3>
				<h2 className=" font-bold max-w-2xl mx-auto xl:text-5xl">
					The Tools You Need to Reach Your Forex Trading Potential
				</h2>
			</div>
			<div className="xl:grid xl:grid-cols-2 xl:gap-10">
				<TradeOptionsCard
					img={spreads}
					title="Razor Sharp Spreads"
					description="Trade FX from 0.0 pip spreads on 14 pairs with our Razor account, with deep liquidity and no requotes"
				/>
				<TradeOptionsCard
					img={reliable}
					title="Fast & Reliable"
					description="Fast execution, 99.90% fill rate^, and no dealing desk intervention"
				/>
				<TradeOptionsCard
					img={cfd}
					title="1200+ CFDs to Trade"
					description="FX, Indices, Commodities, Shares and more"
				/>
				<TradeOptionsCard
					img={broker}
					title="Trusted Broker"
					description="Award winning Forex Broker chosen by 400,000 traders globally"
				/>
			</div>
		</section>
	);
}

interface TradeOptionsCardProps {
	img: string;
	title: string;
	description: string;
}

const TradeOptionsCard = ({ img, title, description }: TradeOptionsCardProps) => {
	return (
		<div className="flex items-center bg-[#F3F5F7] rounded-lg z-10">
			<div className="pl-6 w-[40%]">
				<h3 className="font-semibold text-2xl mb-2">{title}</h3>
				<p className="text-sm">{description}</p>
			</div>
			<div className="w-[60%]">
				<img src={img} alt="" className="rounded-lg" />
			</div>
		</div>
	);
};
