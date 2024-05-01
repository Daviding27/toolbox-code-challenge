import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from '../../../../src/files/components/Navbar';
import '@testing-library/jest-dom'


jest.mock('../../../../src/config/staticUrls', () => ({
  logo: 'toolbox-logo.png' 
}));

describe('Navbar component', () => {
  it('should render navbar with logo', () => {
    const { getByAltText } = render(<Navbar />); 

    const logoElement = getByAltText('toolbox');

    expect(logoElement).toBeInTheDocument(); 
    expect(logoElement).toHaveAttribute('src', 'toolbox-logo.png'); 
    expect(logoElement).toHaveAttribute('height', '40'); 
  });
});
