import React, {useContext} from 'react';
import Row from 'react-bootstrap/Row';
import {ItemContext} from '../../App'

function Header() {
	const category = useContext(ItemContext);

	return (
		<header className="header-container">
			<Row>
				<div>Category: {category.category}</div>
				<input type="text" placeholder="Title, artist, category..." />
			</Row>
		</header>
	);

}

export default Header;
