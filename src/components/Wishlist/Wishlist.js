import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';

function Wishlist() {
	const [wishlistItems, setWishlistItems] = useState([])
	const wishlistWrapper = document.getElementById('wishlist-wrapper');
	let existing = localStorage.getItem('wishlist');
	console.log(existing)
	useEffect(() => {
		existing = existing ? existing.split() : [];
		setWishlistItems(existing)
	}, [existing])

	wishlistItems.map(item => (
		wishlistWrapper.innerHTML = item.replace(/,/g, "")
	))

	return (
		<Col lg={10} md={12} id="wishlist-wrapper" className="albums-container"></Col>
	);

}

export default Wishlist;
