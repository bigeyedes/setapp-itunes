import React, {useContext} from 'react';
import {CategoryContext} from '../../App'

function Header() {
	const [category, setCategory] = useContext(CategoryContext)

	return (
		<header className="header-container">
				<div className="category-name">Category: {category}</div>
				<input type="text" placeholder="Title, artist, category..." />
		</header>
	);

}

export default Header;
