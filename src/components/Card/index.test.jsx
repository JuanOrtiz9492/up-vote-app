import React from 'react';
import { render } from '@testing-library/react';
import Card from '.';

describe('Card Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<Card image={'kanye-west.jpg'} />);
        expect(container).toMatchSnapshot();
      })
})

