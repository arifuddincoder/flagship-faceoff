import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";

const PhonesContainer = ({ data }) => {
	const [displayPhone, setDisplayPhones] = useState([]);
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		if (showAll) {
			setDisplayPhones(data);
		} else {
			setDisplayPhones(data.slice(0, 6));
		}
	}, [data, showAll]);
	return (
		<div className="max-w-screen-2xl mx-auto py-12 px-8 xl:px-24">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
				{displayPhone.map((phone) => (
					<PhoneCard key={phone.id} phone={phone}></PhoneCard>
				))}
			</div>
			<button
				onClick={() => {
					setShowAll((prv) => !prv);
					if (showAll) window.scroll(0, 0);
				}}
			>
				{showAll ? "Show Less" : "Show All"}
			</button>
		</div>
	);
};

export default PhonesContainer;
