import React from 'react';
import { render } from '@testing-library/react';
import Main from '.';
import { BrowserRouter as Router } from "react-router-dom";

describe('Main Component', () => {

    it('should Match the Snapshot', () => {
        const { container } = render(<Router><Main/></Router>);
        expect(container).toMatchSnapshot();
      })
})

