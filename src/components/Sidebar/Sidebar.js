import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';

function Sidebar({items}) {
	const [categoryName, setCategoryName] = useState()

	let itemsCategories = []
	let itemsCategoriesWithNoDubles = []

	const filterDuplicateCategories = (array) => array.filter((value, index) => array.indexOf(value) === index)

	const handleFilterCategory = (e) => {
		const categoryTargetName = e.target.innerHTML
		setCategoryName(itemsCategoriesWithNoDubles[0].filter(name => name.includes(categoryTargetName)))
	}

	items.map(item => (
		itemsCategories.push(item.category.attributes.term)
	))

	itemsCategoriesWithNoDubles.push(filterDuplicateCategories(itemsCategories))

	return (
		<Col sm={2}>
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
