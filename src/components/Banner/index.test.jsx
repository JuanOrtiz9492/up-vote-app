import React from 'react';
import { render } from '@testing-library/react';
import Banner from '.';

describe('Banner Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<Banner />);
        expect(container).toMatchSnapshot();
      })
})
