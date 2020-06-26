import React from 'react';

const Theme = ({children}) => {
	return (
		<div style={{width: '85%', textAlign: 'center', marginTop: 10, marginLeft: 'auto', marginRight: 'auto'}}>
			{children}
		</div>
	);
};

export default Theme;
