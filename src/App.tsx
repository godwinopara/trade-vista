import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Forex = lazy(() => import("./pages/Forex"));
const Commodities = lazy(() => import("./pages/Commodities"));
const Indices = lazy(() => import("./pages/Indices"));
const Shares = lazy(() => import("./pages/Shares"));
const Treasures = lazy(() => import("./pages/Treasures"));
const Cryptocurrencies = lazy(() => import("./pages/Cryptocurrencies"));
const Metatrader4 = lazy(() => import("./pages/Metatrader4"));
const Metatrader5 = lazy(() => import("./pages/Metatrader5"));
const LearnCfds = lazy(() => import("./pages/LearnCfds"));
const LearnForex = lazy(() => import("./pages/LearnForex"));
const LearnShares = lazy(() => import("./pages/LearnShares"));
const TradingGuides = lazy(() => import("./pages/TradingGuides"));
const LearnForexDetails = lazy(() => import("./pages/LearnForexDetails"));
const LearnSharesDetails = lazy(() => import("./pages/LearnSharesDetails"));
const LearnGuideDetails = lazy(() => import("./pages/LearnGuideDetails"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "company/about",
		element: <About />,
	},
	{
		path: "company/contact",
		element: <Contact />,
	},
	{
		path: "market/forex",
		element: <Forex />,
	},
	{
		path: "market/commodities",
		element: <Commodities />,
	},
	{
		path: "market/indices",
		element: <Indices />,
	},
	{
		path: "market/shares",
		element: <Shares />,
	},
	{
		path: "market/treasures",
		element: <Treasures />,
	},
	{
		path: "market/cryptocurrency",
		element: <Cryptocurrencies />,
	},
	{
		path: "platforms/meta4",
		element: <Metatrader4 />,
	},
	{
		path: "platforms/meta5",
		element: <Metatrader5 />,
	},
	{
		path: "education/learn-cfds",
		element: <LearnCfds />,
	},
	{
		path: "education/learn-forex",
		element: <LearnForex />,
	},
	{
		path: "education/learn-shares",
		element: <LearnShares />,
	},
	{
		path: "education/trading-guides",
		element: <TradingGuides />,
	},
	{
		path: "education/learn-forex/:id",
		element: <LearnForexDetails />,
	},
	{
		path: "education/learn-shares/:id",
		element: <LearnSharesDetails />,
	},
	{
		path: "education/trading-guides/:id",
		element: <LearnGuideDetails />,
	},
	{
		path: "signup",
		element: <SignUp />,
	},
	{
		path: "signin",
		element: <SignIn />,
	},
	{
		path: "admin/dashboard",
		element: <Dashboard />,
	},
	{
		path: "user/dashboard",
		element: <UserDashboard />,
	},
]);

function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default App;
