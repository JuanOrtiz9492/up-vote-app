import React from 'react';
import { render } from '@testing-library/react';
import Spiner from '.';

describe('Spiner Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<Spiner />);
        expect(container).toMatchSnapshot();
      })
})

