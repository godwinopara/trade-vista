import { MarketOverview } from "react-ts-tradingview-widgets";
import { FaCheck } from "react-icons/fa6";

export default function TradeWithUs() {
	const tabs = [
		{
			title: "Cryptocurrency",
			symbols: [
				{
					s: "BITSTAMP:BTCUSD",
					d: "Bitcoin / U.S dollar",
				},
				{
					s: "BINANCE:ETHUSDT",
					d: "Ethereum / TetherUS",
				},
				{
					s: "BITSTAMP:ETHUSD",
					d: "Ethereum / U.S. dollar",
				},
				{
					s: "BINANCE:BNBUSDT",
					d: "Binance Coin / TetherUs",
				},
				{
					s: "BINANCE:SHIBUSDT",
					d: "SHIB / TetherUS",
				},
				{
					s: "BINANCE:DOGEUSDT",
					d: "Dogecoin / TetherUS",
				},
			],
			originalTitle: "Cryptocurrency",
		},
		{
			title: "Indices",
			symbols: [
				{
					s: "FOREXCOM:SPXUSD",
					d: "S&P 500",
				},
				{
					s: "FOREXCOM:NSXUSD",
					d: "Nasdaq 100",
				},
				{
					s: "FOREXCOM:DJI",
					d: "Dow 30",
				},
				{
					s: "INDEX:NKY",
					d: "Nikkei 225",
				},
				{
					s: "INDEX:DEU30",
					d: "DAX Index",
				},
				{
					s: "FOREXCOM:UKXGBP",
					d: "UK 100",
				},
			],
			originalTitle: "Indices",
		},
		{
			title: "Commodities",
			symbols: [
				{
					s: "CME_MINI:ES1!",
					d: "S&P 500",
				},
				{
					s: "CME:6E1!",
					d: "Euro",
				},
				{
					s: "COMEX:GC1!",
					d: "Gold",
				},
				{
					s: "NYMEX:CL1!",
					d: "Crude Oil",
				},
				{
					s: "NYMEX:NG1!",
					d: "Natural Gas",
				},
				{
					s: "CBOT:ZC1!",
					d: "Corn",
				},
			],
			originalTitle: "Commodities",
		},
		{
			title: "Bonds",
			symbols: [
				{
					s: "CME:GE1!",
					d: "Eurodollar",
				},
				{
					s: "CBOT:ZB1!",
					d: "T-Bond",
				},
				{
					s: "CBOT:UB1!",
					d: "Ultra T-Bond",
				},
				{
					s: "EUREX:FGBL1!",
					d: "Euro Bund",
				},
				{
					s: "EUREX:FBTP1!",
					d: "Euro BTP",
				},
				{
					s: "EUREX:FGBM1!",
					d: "Euro BOBL",
				},
			],
			originalTitle: "Bonds",
		},
		{
			title: "Forex",
			symbols: [
				{
					s: "FX:EURUSD",
				},
				{
					s: "FX:GBPUSD",
				},
				{
					s: "FX:USDJPY",
				},
				{
					s: "FX:USDCHF",
				},
				{
					s: "FX:AUDUSD",
				},
				{
					s: "FX:USDCAD",
				},
			],
			originalTitle: "Forex",
		},
	];

	return (
		<section className="px-4  bg-secondary">
			<div className="lg:grid grid-cols-2 gap-28  py-24 max-w-7xl mx-auto">
				<div className="mb-20 lg:mb-0 max-w-7xl mx-auto">
					<div className="mb-10">
						<h2 className="text-3xl text-center lg:text-left lg:text-4xl font-bold mb-8">
							Trade with a top-tier global broker for your trades.
						</h2>
						<p>
							With 15 years of financial trading expertise, we provide competitive pricing on a
							variety of global CFD instruments. Enjoy trading the UK 100 from 0.8 points, Germany
							30 from 0.9 points, EUR/USD from 0.6, and EUR/GBP from 0.8 pips.
						</p>
						<br />
						<p>
							Benefit from depth of market availability across all our forex pairs. Harness the
							power of our API technology to seamlessly integrate your strategies with trading
							applications or craft custom user interfaces. Explore the creation and testing of
							automated trading strategies using our APIs.
						</p>
						<br />
						<p>
							Backed by substantial investments in cutting-edge technology, we actively manage your
							trade's internet path, ensuring the fastest route every time. With the ability to
							accelerate the client-side of your MT4 platform, executing with Universal Cryptosphere
							Trade ensures prompt trade delivery surpassing typical ECN technologies.
						</p>
					</div>
					<div>
						<div className="flex items-center mb-2">
							<span className="mr-2 bg-primary-hover text-white p-1 rounded-[100%]">
								<FaCheck />
							</span>
							No digital wallet
						</div>
						<div className="flex items-center mb-2">
							<span className="mr-2 bg-primary-hover text-white p-1 rounded-[100%]">
								<FaCheck />
							</span>
							Low commission
						</div>
						<div className="flex items-center mb-2">
							<span className="mr-2 bg-primary-hover text-white p-1 rounded-[100%]">
								<FaCheck />
							</span>
							Leveraged crypto trading
						</div>
						<div className="flex items-center mb-2">
							<span className="mr-2 bg-primary-hover text-white p-1 rounded-[100%]">
								<FaCheck />
							</span>
							Competitive cryptocurrency spreads
						</div>
						<div className="flex items-center mb-2">
							<span className="mr-2 bg-primary-hover text-white p-1 rounded-[100%]">
								<FaCheck />
							</span>
							All trading strategies and styles allowed
						</div>
					</div>
				</div>
				<div className="h-full">
					<MarketOverview
						colorTheme="light"
						height={600}
						width="100%"
						showFloatingTooltip
						tabs={tabs}
					></MarketOverview>
				</div>
			</div>
		</section>
	);
}
