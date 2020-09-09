import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function Albums({items}) {

	return (
		<Row className="albums-container">
				{items.map(item => (
				<Col sm={4} key={item.id.label}>
					<Card className="album-item" key={item.id.attributes["im:id"]}>
						<Card.Body>
							<Image src={item["im:image"][2].label} fluid />
							<Card.Title>{item["im:artist"].label}</Card.Title>
							<Card.Title>{item.title.label}</Card.Title>
							<a href={item.id.label} target='_blank'><Button variant="primary">{item["im:price"].label}</Button></a>
						</Card.Body>
					</Card>
				</Col>
				))}
		</Row>
	);

}

export default Albums;
