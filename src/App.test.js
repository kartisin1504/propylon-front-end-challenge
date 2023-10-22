import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders without errors', () => {
    const { container  } = render(<App />);
    const frameDiv = container.querySelector('.frame');
    expect(frameDiv).toBeInTheDocument();
  });
});
