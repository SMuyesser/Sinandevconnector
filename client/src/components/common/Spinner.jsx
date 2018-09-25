import React from 'react';
import spinner from '../../img/spinner.gif';

export default () => {
	return (
		<div>
			<img 
				src={spinner} 
				style={{ width: '75px', margin: 'auto', display: 'block' }}
				alt="Loading..."	 
			/>
		</div>
	);
};