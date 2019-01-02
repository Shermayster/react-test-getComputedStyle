import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	const text = div.querySelector('span');
	const styles = getComputedStyle(text);
	console.log(styles.color);
	expect(styles.color).toBe('black');
	ReactDOM.unmountComponentAtNode(div);
});
