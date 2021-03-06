import React, {useEffect, useContext} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {ItemContext} from '../../App'

function Albums() {

	const [items, setItems] = useContext(ItemContext)

	const handleAddToWishlist = (e) => {

		let existing = localStorage.getItem('wishlist');

		existing = existing ? existing.split() : [];
		existing.push(e.target.parentNode.parentNode.parentNode.parentNode.outerHTML);
		localStorage.setItem('wishlist', existing.toString());
		alert('Item added to your wishlist')
	}

	useEffect(() => {
		document.body.addEventListener('click', (e) => {
			const allCarts = document.querySelectorAll('.cart-details')
			for(const cart of allCarts){
				cart.classList.remove('cart-details-active')
			}
			if(e.target.classList.contains('show-details')){
				e.target.parentNode.parentNode.querySelector('.cart-details').classList.add('cart-details-active')
			}
		})
	}, [])

	return (
		<Row className="albums-container">
				{items.map(item => (
				<Col className="cart-container" xl={3} lg={4} xs={6} key={item.id.label}>
					<Card className="album-item" key={item.id.attributes["im:id"]}>
						<Card.Body>
							<div className="album-image">
								<Image src={item["im:image"][2].label} fluid />
							</div>
							<summary className="cart-details">
								<Card.Title>Category: {item.category.attributes.term}</Card.Title>
								<Card.Text>Release date: {item["im:releaseDate"].attributes.label}</Card.Text>
								<Card.Text>Rights: {item.rights.label}</Card.Text>
							</summary>
							<Card.Text className="album-category">{item.category.attributes.term}</Card.Text>
							<Card.Title>{item["im:artist"].label}<button onClick={handleAddToWishlist} title="Add to Wishlist"></button></Card.Title>
							<Card.Text>{item.title.label}</Card.Text>
							<div className="cart-buttons">
								<a href={item.id.label} target='_blank' rel="noopener noreferrer"><Button variant="primary">{item["im:price"].label}</Button></a>
								<Button className="show-details" variant="secondary">Details</Button>
							</div>

						</Card.Body>
					</Card>
				</Col>
				))}
		</Row>
	);

}

export default Albums;
