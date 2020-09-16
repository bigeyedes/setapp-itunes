import React, {useContext} from 'react';
import Col from 'react-bootstrap/Col';

import {CategoryContext} from '../../App'

function Sidebar({sidebarCategories}) {
	const [category, setCategory] = useContext(CategoryContext)

	let itemsCategories = []
	let itemsCategoriesWithNoDubles = []

	const filterDuplicateCategories = (array) => array.filter((value, index) => array.indexOf(value) === index)

	const handleFilterCategory = (e) => {
		const categoryTargetName = e.target.innerHTML
		setCategory(categoryTargetName)
		document.querySelector('ul').classList.remove('filters-active')
	}

	const handleFiltersShowing = (e) => {
		const filters = document.querySelector('ul').classList
		const cssClass = 'filters-active'
		filters.contains(cssClass) ? filters.remove(cssClass)  : filters.add(cssClass)
		filters.contains(cssClass) ? e.target.innerHTML = 'Hide' : e.target.innerHTML = 'Show'
	}

	sidebarCategories.map(item => (
		itemsCategories.push(item.category.attributes.term)
	))

	itemsCategoriesWithNoDubles.push(filterDuplicateCategories(itemsCategories))

	return (
		<Col xl={2} lg={3} md={12}>
		<aside className="sidebar-container">
			<h1>Setapp iTunes</h1>
			<div>
				<p>Filters:</p>
				<ul>
					{itemsCategoriesWithNoDubles[0].map(uniqueItem => (
						<li onClick={handleFilterCategory} key={uniqueItem}>{uniqueItem}</li>
					))}
				</ul>
				<button onClick={handleFiltersShowing}>Show</button>
			</div>
		</aside>
		</Col>
	);

}

export default Sidebar;
