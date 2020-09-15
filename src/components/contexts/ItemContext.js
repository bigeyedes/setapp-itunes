import React, {createContext } from 'react';

export const ItemContext = createContext(themes);

const ItemContextProvider = (props) => {
	return (
		<ItemContext.Provider value={themes}>
		{props.children}
		</ItemContext.Provider>
	)
}

export default ItemContextProvider;