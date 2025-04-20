import React, { useState } from "react";
import Hero from "../components/Hero";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
	const data = useLoaderData();
	const [phones, setPhones] = useState(data);
	const handleSearch = (e, text) => {
		e.preventDefault();
		if (text === "") return setPhones(data);
		const searchedPhones = data.filter(
			(phone) =>
				phone?.name?.toLowerCase().split(" ").includes(text.toLowerCase()) ||
				phone?.brand?.toLowerCase().split(" ").includes(text.toLowerCase())
		);
		setPhones(searchedPhones);
	};
	return (
		<>
			<Hero handleSearch={handleSearch}></Hero>
			<PhonesContainer data={phones}></PhonesContainer>
		</>
	);
};

export default Home;
