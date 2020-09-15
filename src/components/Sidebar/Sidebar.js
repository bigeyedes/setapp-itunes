import React, {useState, useContext} from 'react';
import Col from 'react-bootstrap/Col';
import {ItemContext, CategoryContext} from '../../App'

function Sidebar() {
	const [items, setItems] = useContext(ItemContext)
	const [category, setCategory] = useContext(CategoryContext)

	let itemsCategories = []
	let itemsCategoriesWithNoDubles = []

	const filterDuplicateCategories = (array) => array.filter((value, index) => array.indexOf(value) === index)

	const handleFilterCategory = (e) => {
		const categoryTargetName = e.target.innerHTML
		setCategory(itemsCategoriesWithNoDubles[0].filter(name => name.includes(categoryTargetName)))
	}

	items.map(item => (
		itemsCategories.push(item.category.attributes.term)
	))

	itemsCategoriesWithNoDubles.push(filterDuplicateCategories(itemsCategories))

	return (
		<Col xl={2} md={3}>
		<aside className="sidebar-container">
			<h1>Setapp iTunes</h1>
			<div>
				<p>Filters:</p>
				<ul>
					{itemsCategoriesWithNoDubles[0].map(uniqueItem => (
						<li onClick={handleFilterCategory} key={uniqueItem}>{uniqueItem}</li>
					))}
				</ul>
			</div>
		</aside>
		</Col>
	);

}

export default Sidebar;
