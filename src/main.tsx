import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import "./index.css";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);

createRoot(document.getElementById("root") || document.body).render(
	<RouterProvider router={router} />,
);
