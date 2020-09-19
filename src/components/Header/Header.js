import React, {useContext, useRef} from 'react';

import {ItemContext, CategoryContext} from '../../App'


function Header(props) {
	const [category, setCategory] = useContext(CategoryContext)
	const [items, setItems] = useContext(ItemContext)
	const searchRef = useRef()

	const handleSerach = () => {
		if(searchRef.current.value.length > 3){
			setItems(props.searchForItems(items, searchRef.current.value))
		} else {
			props.loadiTunesItems()
		}
	}

	return (
		<header className="header-container">
			<input onChange={handleSerach} type="text" placeholder="Title, artist, category..." ref={searchRef} />
		</header>
	);

}

export default Header;
