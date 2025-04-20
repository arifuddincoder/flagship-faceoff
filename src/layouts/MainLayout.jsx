import React from "react";
import { Outlet } from "react-router";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className="min-h-[calc(100vh-117px)]">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</>
	);
};

export default MainLayout;
