import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Forex = lazy(() => import("./pages/Forex"));
const Commodities = lazy(() => import("./pages/Commodities"));
const Indices = lazy(() => import("./pages/Indices"));
const Shares = lazy(() => import("./pages/Shares"));
const Treasures = lazy(() => import("./pages/Treasures"));
const Cryptocurrencies = lazy(() => import("./pages/Cryptocurrencies"));
const Metatrader4 = lazy(() => import("./pages/Metatrader4"));
const Metatrader5 = lazy(() => import("./pages/Metatrader5"));

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
		path: "market/treasuries",
		element: <Treasures />,
	},
	{
		path: "market/crypto",
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
]);

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default App;
