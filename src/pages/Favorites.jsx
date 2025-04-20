import React, { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../utilities";
import PhoneCard from "../components/PhoneCard";
import EmptyState from "../components/ui/EmptyState";

const Favorites = () => {
	const [displayPhone, setDisplayPhones] = useState([]);
	useEffect(() => {
		const savedPhones = getFavorites();
		setDisplayPhones(savedPhones);
	}, []);

	const handleDelete = (id) => {
		removeFavorite(id);
		setDisplayPhones(getFavorites());
	};

	if (displayPhone.length < 1) return <EmptyState />;

	return (
		<div className="max-w-screen-2xl mx-auto py-12 px-8 xl:px-24">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
				{displayPhone.map((phone) => (
					<PhoneCard key={phone.id} phone={phone} deletable={true} handleDelete={handleDelete}></PhoneCard>
				))}
			</div>
		</div>
	);
};

export default Favorites;
