import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';

function Header() {

	const [category, setCategory] = useState('All')

	return (
		<header className="header-container">
			<Row>
				<div>Category: {category}</div>
				<input type="text" placeholder="Title, artist, category..." />
			</Row>
		</header>
	);

}

export default Header;
