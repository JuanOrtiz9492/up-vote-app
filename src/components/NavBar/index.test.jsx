import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '.';

describe('NavBar Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<NavBar />);
        expect(container).toMatchSnapshot();
      })
})

