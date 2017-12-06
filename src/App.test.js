import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { render, configure } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store'

configure({ adapter: new Adapter() });
it('renders without crashing', () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
});
