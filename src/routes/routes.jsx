import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Favorites from "../pages/Favorites";
import ErrorPage from "../pages/ErrorPage";
import PhoneDetails from "../pages/PhoneDetails";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				index: true,
				Component: Home,
				hydrateFallbackElement: <p>Loading...</p>,
				loader: () => fetch("/phones.json"),
			},
			{
				path: "/about",
				Component: About,
			},
			{
				path: "/favorites",
				Component: Favorites,
			},
			{
				path: "/phone-details/:id",
				Component: PhoneDetails,
				hydrateFallbackElement: <p>Loading...</p>,
				loader: () => fetch("../phones.json"),
			},
			{
				path: "/cart",
				Component: Cart,
			},
		],
	},
]);
