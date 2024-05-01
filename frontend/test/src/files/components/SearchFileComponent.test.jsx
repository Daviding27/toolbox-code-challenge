import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { SearchFileComponent } from '../../../../src/files/components/SearchFileComponent';
import '@testing-library/jest-dom'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('SearchFileComponent', () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  it('should render input and buttons', () => {
    const { getByPlaceholderText, getByText } = render(<SearchFileComponent />);
    expect(getByPlaceholderText('Type the file name')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
    expect(getByText('Reload all data')).toBeInTheDocument();
  });

  it('should update searchQuery state on input change', () => {
    const { getByPlaceholderText } = render(<SearchFileComponent />);
    const input = getByPlaceholderText('Type the file name');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('should dispatch findDataByFilename when search button is clicked with a non-empty searchQuery', () => {
    const { getByText, getByPlaceholderText } = render(<SearchFileComponent />);
    const input = getByPlaceholderText('Type the file name');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(getByText('Search'));
    expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function));
  });


  it('should dispatch getAllFiles when reload button is clicked', () => {
    const { getByText } = render(<SearchFileComponent />);
    fireEvent.click(getByText('Reload all data'));
    expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function));
  });
});
