import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './assets/scss/main.scss';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Wishlist from './components/Wishlist/Wishlist'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'


export const ItemContext = React.createContext()
export const CategoryContext = React.createContext()

function App() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] =  useState([])
	const [resetItems, setResetItems] = useState([])
	const [category, setCategory] = useState()
	const [sidebarCategories, setsidebarCategories] = useState()

	const loadiTunesItems = async () => {
		try {
			const reponse = await fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
			const data = await reponse.json()
			setItems(data.feed.entry);
			//Set items which will be basic, after stack reset when seach and filter
			setResetItems(data.feed.entry);
			setsidebarCategories(data.feed.entry);
			setIsLoaded(true)
		} catch (e) {
			setError(e.message)
		}
	}

	const searchForItems = (array, keyword) => {
		setItems(resetItems)
		const regExp = new RegExp(keyword,"gi");
		const check = obj => {
		  if (obj !== null && typeof obj === "object") { return Object.values(obj).some(check) }
		  if (Array.isArray(obj)) { return obj.some(check) }
		  return (typeof obj === "string" || typeof obj === "number") && regExp.test(obj);
		}
		return array.filter(check);
	}

	useEffect(() => {
		loadiTunesItems()
	}, [])

	useEffect(() => {
		setItems(searchForItems(resetItems, category))
	}, [category])

	if(error){
		return error.message
	} else if(!isLoaded){
		return <div className="lodaing-container"> <p>Looking for albums...</p> </div>
	} else {
		return (
			<Container fluid className="App">
				<Row>
					<ItemContext.Provider value={[items, setItems]}>
						<CategoryContext.Provider value={[category, setCategory]}>
						<Router>
							<Col xs={12} className="link-container">
								<Link to="/">Home</Link>
								<Link to="/wishlist">My wishlist</Link>
							</Col>
							<Switch>
								<Route path="/wishlist">
									<Wishlist />
								</Route>
								<Route path="/">
									<Sidebar  sidebarCategories={sidebarCategories} />
									<Content searchForItems={searchForItems} loadiTunesItems={loadiTunesItems}/>
								</Route>
							</Switch>
						</Router>
						</CategoryContext.Provider>
					</ItemContext.Provider>
				</Row>
			</Container>
		);
	}
}

export default App;
