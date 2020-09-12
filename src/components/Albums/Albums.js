import React, {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function Albums({items}) {

	useEffect(() => {
		document.body.addEventListener('click', (e) => {
			e.preventDefault();
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
				<Col xl={3} md={4} key={item.id.label}>
					<Card className="album-item" key={item.id.attributes["im:id"]}>
						<Card.Body>
							<div className="album-image">
								<Image src={item["im:image"][2].label} fluid />
							</div>
							<summary className="cart-details">
								<Card.Title>Category: {item.category.attributes.label}</Card.Title>
								<Card.Text>Release date: {item["im:releaseDate"].attributes.label}</Card.Text> 
								<Card.Text>Rights: {item.rights.label}</Card.Text>
								<a href={item.id.label} target='_blank' rel="noopener noreferrer"><Button variant="primary">{item["im:price"].label}</Button></a> 
							</summary>
							<Card.Title>{item["im:artist"].label}</Card.Title>
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
