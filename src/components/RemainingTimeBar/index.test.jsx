import React from 'react';
import { render } from '@testing-library/react';
import RemainingTimeBar from '.';

describe('RemainingTimeBar Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<RemainingTimeBar />);
        expect(container).toMatchSnapshot();
      })
})

