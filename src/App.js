import React, {useEffect, useState, createContext, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './assets/scss/main.scss';

import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'

export const ItemContext = React.createContext()
export const CategoryContext = React.createContext()

function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] =  useState([])
	const [category, setCategory] = useState('All')

	const searchForCategoryItems = (array, keyword) => {
		const regExp = new RegExp(keyword,"gi");
		const check = obj => {
		  if (obj !== null && typeof obj === "object") { return Object.values(obj).some(check) }
		  if (Array.isArray(obj)) { return obj.some(check) }
		  return (typeof obj === "string" || typeof obj === "number") && regExp.test(obj);
		}
		return array.filter(check);
	}

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


	if(error){
		return error.message
	} else if(!isLoaded){
		return <div className="lodaing-container">Loading...</div>
	} else {
		return (
			<Container fluid className="App">
				<Row>
					<ItemContext.Provider value={[items, setItems]}>
						<CategoryContext.Provider value={[category, setCategory]}>
							<Sidebar />
							<Content />
						</CategoryContext.Provider>
					</ItemContext.Provider>
				</Row>
			</Container>
		);
	}
}

export default App;
