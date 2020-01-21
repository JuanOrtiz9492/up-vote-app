import React from 'react';
import { render } from '@testing-library/react';
import ButtonGroup from '.';

describe('ButtonGroup Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<ButtonGroup />);
        expect(container).toMatchSnapshot();
      })
})

