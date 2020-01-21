import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from '.';

describe('ProgressBar Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<ProgressBar />);
        expect(container).toMatchSnapshot();
      })
})

