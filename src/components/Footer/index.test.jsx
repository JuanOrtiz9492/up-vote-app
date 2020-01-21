import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
      })
})

