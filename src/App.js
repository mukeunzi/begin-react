import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
	const name = '묵묵';
	const style = {
		backgroundColor: 'red',
		color: 'yellow',
		fontSize: 24
	};

	return (
		<>
			<div>
				<Hello />
				<Hello />
				<br></br>
				<Hello />
			</div>

			<div style={style}>{name}</div>
			<div
				className="muk-box" //안보여??
			></div>
			{/* 안보일 것인가!!! */}

			<Hello name="묵이당" color="red" />
			<Hello color="purple" />
		</>
	);
}

export default App;
