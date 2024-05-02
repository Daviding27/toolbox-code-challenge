import React from 'react';
import { render } from '@testing-library/react';
import { FetchingDataView } from '../../../../src/files/components/FetchingDataView';
import '@testing-library/jest-dom';

describe('FetchingDataView component', () => {
  it('should render with default message when no message is provided', () => {
    const { getByText } = render(<FetchingDataView />);
    expect(getByText('Loading ...')).toBeInTheDocument();
  });

  it('should render with custom message when provided', () => {
    const customMessage = 'Custom message';
    const { getByText } = render(<FetchingDataView message={customMessage} />);
    expect(getByText(`Loading ${customMessage} ...`)).toBeInTheDocument();
  });

  it('should render spinner', () => {
    const { getByRole } = render(<FetchingDataView />);
    expect(getByRole('status')).toBeInTheDocument();
  });

  it('should render with correct styles', () => {
    const { container } = render(<FetchingDataView />);
    const div = container.firstChild;
    expect(div).toHaveStyle(`
      min-height: 100vh;
      background-color: #ffffff;
      color: #D91438;
      padding: 2rem;
    `);
  });
});
