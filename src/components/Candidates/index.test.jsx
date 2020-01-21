import React from 'react';
import { render } from '@testing-library/react';
import Candidates from '.';

describe('Candidates Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<Candidates />);
        expect(container).toMatchSnapshot();
      })
})

