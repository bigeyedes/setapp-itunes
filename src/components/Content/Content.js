import React, {useContext} from 'react';
import Col from 'react-bootstrap/Col';

import Header from '../Header/Header'
import Albums from '../Albums/Albums'


function Content(props) {
	return (
		<Col xl={10} lg={9} className="content-container">
			<Header searchForItems={props.searchForItems} loadiTunesItems={props.loadiTunesItems}/>
			<Albums />
		</Col>
	);

}

export default Content;
