import React from "react";
import { Link } from "react-router";

const EmptyState = () => {
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">No Data Found</h1>
					<p className="py-6">Browse, search, phones, add to cart, favorites.</p>
					<Link to="/">
						<button className="btn btn-primary">Browse Phones</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EmptyState;
