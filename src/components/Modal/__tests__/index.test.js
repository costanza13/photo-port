import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
  name: 'Grocery aisle',
  category: 'commercial',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal is rendering', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
  });
});

describe('Modal displays image', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />)
    expect(asFragment()).toMatchSnapshot()
  });
});

describe('Modal displays metadata', () => {
  it('renders', () => {
    const { getByTestId } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />)
    expect(getByTestId('modalPhotoName')).toHaveTextContent('Grocery aisle')
    expect(getByTestId('modalPhotoDescription')).toHaveTextContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie')
    expect(getByTestId('modalCloseButton')).toHaveTextContent('Close this modal')
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />)
    fireEvent.click(getByText('Close this modal'));
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
}) 