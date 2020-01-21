import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
      })
})

