import React from 'react';
import Col from 'react-bootstrap/Col';

import Header from '../Header/Header'
import Albums from '../Albums/Albums'

function Content({items}) {

	return (
		<Col sm={10} className="content-container">
			<Header/>
			<Albums items={items}/>
		</Col>
	);

}

export default Content;
