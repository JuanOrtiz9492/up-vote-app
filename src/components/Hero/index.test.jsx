import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Hero from '.';

describe('Hero Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<Router><Hero /></Router>);
        expect(container).toMatchSnapshot();
      })
})

