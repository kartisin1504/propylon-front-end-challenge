
import { render, screen } from '@testing-library/react';
import Frame from './Frame';


jest.mock('../../hooks/useContents', () => ({
  __esModule: true,
  default: () => ({
    results: [
      // Mock your data here, e.g.:
      {
        id: '1',
        name: 'Item 1',
        level: 1,
        parent_id: '',
        content: 'Content 1',
      },
      // Add more items as needed
    ],
  }),
}));

describe('Frame Component', () => { 
  it('renders Frame component', () => {
    render(<Frame />);
    const frameElement = screen.getByTestId('frame');
    expect(frameElement).toBeInTheDocument();
  });

  it('renders child elements', () => {
    render(<Frame />);
    
    const div2 = screen.getByTestId('div-2');
    expect(div2).toBeInTheDocument();
  });

  
});
