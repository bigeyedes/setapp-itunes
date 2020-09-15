import React, {createContext} from 'react';

const items = null

export const ItemContext = createContext();

const ItemContextProvider = (props) => {

	return (
		<ItemContext.Provider value={items}>
		{props.children}
		</ItemContext.Provider>
	)
}

export default ItemContextProvider;