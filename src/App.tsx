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
    path: "/about",
    element: <About />,
  },
  {
    path: "/forex",
    element: <Forex />,
  },
  {
    path: "/commodities",
    element: <Commodities />,
  },
  {
    path: "/indices",
    element: <Indices />,
  },
  {
    path: "/shares",
    element: <Shares />,
  },
  {
    path: "/treasuries",
    element: <Treasures />,
  },
  {
    path: "/crypto",
    element: <Cryptocurrencies />,
  },
  {
    path: "/trading-platforms/metatrader4",
    element: <Metatrader4 />,
  },
  {
    path: "/trading-platforms/metatrader5",
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
