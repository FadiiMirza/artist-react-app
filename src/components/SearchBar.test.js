import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import { render } from '@testing-library/react';

it('renders without crashes', () => {
    const div =  document.createElement('div');
    ReactDOM.render(<SearchBar></SearchBar>, div);
});

// it('Renders search correctly', () => {
//     const {getByTestId} = render(<SearchBar value="artist"></SearchBar>);
//     expect(getByTestId('search')).toHaveTextContent("artist");
// });