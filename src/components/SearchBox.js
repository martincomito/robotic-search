import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return(
		<div className='pa2 '>
			<input 
			className='searchBox pa3 ba b--green bg-lightest-blue' 
			type='search' 
			placeholder='Search here'
			onChange={searchChange} 
			/>
		</div>
	);
}

export default SearchBox;