import React from "react";
import { Link } from "react-router";
import { MdDeleteForever } from "react-icons/md";
import { removeFavorite } from "../utilities";
const PhoneCard = ({ phone, deletable, handleDelete }) => {
	const { id, name, image, description } = phone;
	return (
		<div className="card bg-base-100 shadow-sm">
			<figure>
				<img src={image} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p>{description}</p>
				<div className="card-actions justify-end">
					<Link to={`/phone-details/${id}`}>
						<button className="btn btn-primary">View More</button>
					</Link>
				</div>
			</div>
			{deletable && (
				<div
					onClick={() => handleDelete(id)}
					className="absolute -right-2 -top-2 bg-amber-700 rounded-sm p-2 cursor-pointer"
				>
					<MdDeleteForever size={25} color="#fff" />
				</div>
			)}
		</div>
	);
};

export default PhoneCard;
