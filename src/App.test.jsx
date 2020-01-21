import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', ()=> {
  it('should Match the Snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  })
});

