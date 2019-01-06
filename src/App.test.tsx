import React from 'react';
import { render, getByText, cleanup } from 'react-testing-library';
import ReactDOM from 'react-dom';
import App from './App';

test('getComputedStyle', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	const text = div.querySelector('span')!;
	const styles = getComputedStyle(text);
	console.log(styles.color);
	expect(styles.color).toBe('black');
	ReactDOM.unmountComponentAtNode(div);
});

test('react-testing-library', () => {
	const el = render(
		<div id="root">
			<App />
		</div>
	);
	const text = el.getByText('Hi!');
	const styles = getComputedStyle(text);
	expect(styles.color).toBe('black');
});
