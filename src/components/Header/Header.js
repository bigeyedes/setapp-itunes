import React, {useState} from 'react';

function Header() {

	const [category, setCategory] = useState('All')

	return (
		<header className="header-container">
			Category: {category}
		</header>
	);

}

export default Header;
