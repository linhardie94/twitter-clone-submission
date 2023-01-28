// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import RightSidebar from '../src/components/RightSidebar/RightSidebar';

//snapshot test
test('RightSidebar component should match snapshot', () => {
  const { container } = render(<RightSidebar />);
  expect(container.firstChild).toMatchSnapshot();
});

//snapshot test
test('RightSidebar component should match snapshot', () => {
  const { getByText } = render(<RightSidebar />);
  expect(getByText('Trending')).toHaveClass('font-medium');
  expect(getByText('#gryffindor')).toHaveClass('font-bold');
  //test for other classes
});

//unit test
test('RightSidebar should render with correct text', () => {
  const { getByText } = render(<RightSidebar />);
  expect(getByText('Trending')).toBeInTheDocument();
  expect(getByText('#gryffindor')).toBeInTheDocument();
  expect(getByText('#hufflepuff')).toBeInTheDocument();
  expect(getByText('#slytherin')).toBeInTheDocument();
  expect(getByText('#ravenclaw')).toBeInTheDocument();
});