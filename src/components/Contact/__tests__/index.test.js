import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<Contact />);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  })
});

describe('Contact verify content', () => {
  it('has correct heading', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('contact-h1')).toHaveTextContent('Contact me');
  })

  it('has submit button', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('contact-submit')).toHaveTextContent('Submit');
  })
});