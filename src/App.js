import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import './assets/scss/main.scss';

import Albums from './components/Albums/Albums'

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
			<Container className="App">
				<Albums items={items}/>
			</Container>
		);
	  }
}

export default App;
