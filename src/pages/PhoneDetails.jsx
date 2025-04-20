import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { MdBookmarkAdd } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { addCart, addFavorites, getCart } from "../utilities";
import { CartContext } from "../components/Providers/Context";

const PhoneDetails = () => {
	const { setCart } = useContext(CartContext);

	const data = useLoaderData();
	const { id } = useParams();
	const singlePhone = data.find((phone) => phone.id === parseInt(id));
	const { brand, name, model, image, description, storage, camera_info } = singlePhone || {};

	const handleFavorite = () => {
		addFavorites(singlePhone);
	};

	const handleCart = () => {
		addCart(singlePhone);

		setCart(getCart());
	};

	return (
		<div className="container max-w-screen-2xl mx-auto">
			<div>
				<img className="w-full mx-auto md:w-auto  mb-8" src={image} alt="" />
			</div>
			<div className="flex justify-between">
				<h1>{name}</h1>
				<div className="space-x-2">
					<button onClick={handleFavorite} className="btn btn-neutral">
						<MdBookmarkAdd size={24} />
					</button>
					<button onClick={handleCart} className="btn btn-primary">
						<FaCartArrowDown size={24} />
					</button>
				</div>
			</div>

			<div className="space-y-4">
				<h2 className="font-thin text-4xl">Details: </h2>
				<p>
					<span className="font-bold">Brand:</span>
					{brand}
				</p>
				<p>
					<span className="font-bold">model:</span>
					{model}
				</p>
				<p>
					<span className="font-bold">description:</span>
					{description}
				</p>
				<p>
					<span className="font-bold">storage:</span>
					{storage}
				</p>
				<p>
					<span className="font-bold">camera_info:</span>
					{camera_info}
				</p>
			</div>
		</div>
	);
};

export default PhoneDetails;
