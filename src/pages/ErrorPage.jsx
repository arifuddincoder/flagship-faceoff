import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<>
			<Navbar />
			<div className="py-24 text-center">
				<h1 className="mb-8 text-7xl font-thin text-gray-900">{error?.status || 404}</h1>
				<p className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
					{error?.error?.message || "Something Went Wrong!"}
				</p>
				<Link to="/">
					<button className="btn btn-primary">Go To Homepage</button>
				</Link>
			</div>
			<Footer></Footer>
		</>
	);
};

export default ErrorPage;
