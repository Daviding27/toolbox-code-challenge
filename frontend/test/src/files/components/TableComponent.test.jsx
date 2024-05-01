import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { TableComponent } from '../../../../src/files/components/TableComponent';
import '@testing-library/jest-dom'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('TableComponent', () => {
  const tableLinesMock = [
    { name: 'File 1', text: 'Text 1', number: 1, hex: '#000000' },
    { name: 'File 2', text: 'Text 2', number: 2, hex: '#ffffff' },
  ];

  it('should render table with data when tableLines is provided', () => {
    useSelector.mockReturnValue({ tableLines: tableLinesMock });
    const { getByText } = render(<TableComponent />);
    expect(getByText('File 1')).toBeInTheDocument();
    expect(getByText('Text 1')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('#000000')).toBeInTheDocument();
    expect(getByText('File 2')).toBeInTheDocument();
    expect(getByText('Text 2')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('#ffffff')).toBeInTheDocument();
  });
});
