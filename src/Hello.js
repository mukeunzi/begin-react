import React from 'react';

function Hello({ color, name }) {
	return <div style={{ color: color }}>안뇽 {name}</div>;
}

Hello.defaultProps = {
	name: '디폴트 묵!'
};

export default Hello;
