import React, {useEffect, useState, createContext, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './assets/scss/main.scss';

import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'

export const ItemContext = React.createContext()

function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] =  useState([])

	const loadiTunesItems = async () => {
		try {
			const reponse = await fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
			const data = await reponse.json()
			setItems(data.feed.entry);
			setIsLoaded(true)
		} catch (e) {
			setError(e.message)
		}
	}

	useEffect(() => {
		loadiTunesItems()
	}, [])

	const contextValues = {category: 'All', albums: items}
	if(error){
		return error.message
	} else if(!isLoaded){
		return <div className="lodaing-container">Loading...</div>
	} else {
		return (
			<Container fluid className="App">
				<Row>
					<ItemContext.Provider value={contextValues}>
						<Sidebar />
						<Content />
					</ItemContext.Provider>
				</Row>
			</Container>
		);
	}
}

export default App;
