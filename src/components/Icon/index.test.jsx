import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {
  ThumbsUpIcon,
  ThumbsDownIcon,
  SearchIcon,
  WikipediaIcon,
  FacebookIcon,
  TwitterIcon
} from './IconList';

describe('Iconlist Components', () => {

    afterEach(cleanup);

    it('ThumbsUpIcon should Match the Snapshot', () => {
      const { container } = render(<ThumbsUpIcon />);
      expect(container).toMatchSnapshot();
    })

    it('ThumbsDownIcon should Match the Snapshot', () => {
      const { container } = render(<ThumbsDownIcon />);
      expect(container).toMatchSnapshot();
    })

    it('SearchIcon should Match the Snapshot', () => {
      const { container } = render(<SearchIcon />);
      expect(container).toMatchSnapshot();
    })

    it('WikipediaIcon should Match the Snapshot', () => {
      const { container } = render(<WikipediaIcon />);
      expect(container).toMatchSnapshot();
    })

    it('FacebookIcon should Match the Snapshot', () => {
      const { container } = render(<FacebookIcon />);
      expect(container).toMatchSnapshot();
    })

    it('TwitterIcon should Match the Snapshot', () => {
      const { container } = render(<TwitterIcon />);
      expect(container).toMatchSnapshot();
    })
})

