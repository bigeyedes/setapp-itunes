import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './assets/scss/main.scss';

import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'

function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] =  useState([])

	useEffect(() => {
		fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
		  .then(res => res.json())
		  .then(
			(result) => {
			  setIsLoaded(true);
			  setItems(result.feed.entry);
			},
			(error) => {
			  setIsLoaded(true);
			  setError(error);
			}
		  )
	  }, [])

	if (error) {
		return <div>Error: {error.message}</div>;
	  } else if (!isLoaded) {
		return <div>Loading...</div>;
	  } else {
		return (
			<Container fluid className="App">
				<Row>
					<Sidebar items={items}/>
					<Content items={items} />
				</Row>
			</Container>
		);
	  }
}

export default App;
