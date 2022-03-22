import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup)


it('renders', () => {
  render(<Contact/>);
})

describe('Nav component', () => {
  // baseline test
  it('renders', () => {
    render(<Contact/>);
  });
 
  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Contact/>);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
  })

  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })
 
  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('submit-button')).toHaveTextContent('Submit')
  })