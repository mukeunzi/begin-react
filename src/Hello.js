import React from 'react';

function Hello({ color, name, isStar }) {
	return (
		<div style={{ color }}>
			{isStar && <b>*</b>}
			안뇽 {name}
		</div>
	);
}

Hello.defaultProps = {
	name: '디폴트 묵!'
};

export default Hello;
