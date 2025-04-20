import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { CartContext } from "./Providers/Context";
const Navbar = () => {
	const { cart } = useContext(CartContext);
	return (
		<div className="bg-base-100 shadow-sm">
			<div className="navbar p-0 max-w-screen-2xl mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
							</svg>
						</div>
						<ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							<li>
								<NavLink className={({ isActive }) => (isActive ? `text-indigo-500` : ``)} to="/">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink className={({ isActive }) => (isActive ? `text-indigo-500` : ``)} to="/about">
									About
								</NavLink>
							</li>
							<li>
								<NavLink className={({ isActive }) => (isActive ? `text-indigo-500` : ``)} to="/cart">
									<FaShoppingCart size={20} />
								</NavLink>
							</li>
							<li>
								<NavLink className={({ isActive }) => (isActive ? `text-indigo-500` : ``)} to="/favorites">
									<MdBookmarkAdd size={20} />
								</NavLink>
							</li>
						</ul>
					</div>
					<Link to="/" className="font-bold text-xl">
						FlagshipFaceOff
					</Link>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<NavLink className={({ isActive }) => (isActive ? `text-indigo-500` : ``)} to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className={({ isActive }) => (isActive ? `text-indigo-500` : ``)} to="/about">
								About
							</NavLink>
						</li>
						<li className="relative">
							<NavLink className={({ isActive }) => (isActive ? `text-indigo-500` : ``)} to="/cart">
								<FaShoppingCart size={20} />
								<p>{cart.length}</p>
							</NavLink>
						</li>
						<li>
							<NavLink className={({ isActive }) => (isActive ? `text-indigo-500` : ``)} to="/favorites">
								<MdBookmarkAdd size={20} />
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
