import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

function App() {
	return (
		<Wrapper>
			<Hello name="묵이당" color="red" isStar />
			<Hello color="purple" />
		</Wrapper>
	);
}

export default App;
