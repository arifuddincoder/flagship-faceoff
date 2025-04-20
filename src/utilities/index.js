import toast from "react-hot-toast";

export const getFavorites = () => {
	const favorites = localStorage.getItem("favorites");
	if (favorites) {
		return JSON.parse(favorites);
	} else {
		return [];
	}
};

export const addFavorites = (phone) => {
	const favorites = getFavorites();
	const isExist = favorites.find((p) => p.id === phone.id);
	if (isExist) {
		toast.error("Already in Wishlist!");
	} else {
		favorites.push(phone);
		const favoritesString = JSON.stringify(favorites);
		localStorage.setItem("favorites", favoritesString);
		toast.success("Phone added on favorites");
	}
};

export const removeFavorite = (id) => {
	const favorites = getFavorites();
	const remainingFavorites = favorites.filter((phone) => phone.id !== id);
	const remainingString = JSON.stringify(remainingFavorites);
	localStorage.setItem("favorites", remainingString);
	toast.success("Phone removed from favorites");
};

export const getCart = () => {
	const cart = localStorage.getItem("cart");
	if (cart) {
		return JSON.parse(cart);
	} else {
		return [];
	}
};

export const addCart = (phone) => {
	const cart = getCart();
	const isExist = cart.find((p) => p.id === phone.id);
	if (isExist) {
		toast.error("Already in Cart!", { position: "top-right" });
	} else {
		cart.push(phone);
		const cartString = JSON.stringify(cart);
		localStorage.setItem("cart", cartString);
		toast.success("Phone Added on Cart");
	}
};

export const removeCart = (id) => {
	const cart = getCart();
	const remainingCart = cart.filter((phone) => phone.id !== id);
	const cartString = JSON.stringify(remainingCart);
	localStorage.setItem("cart", cartString);
	toast.success("Phone removed from Cart");
};
