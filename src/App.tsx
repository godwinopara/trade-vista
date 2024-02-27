import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
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
