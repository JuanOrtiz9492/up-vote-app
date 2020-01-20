import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ThumbsUp } from '../../assets/svg/thumbs-up.svg';
import { ReactComponent as ThumbsDown } from '../../assets/svg/thumbs-down.svg';
import { ReactComponent as Search } from '../../assets/svg/search.svg';
import { ReactComponent as Wikipedia } from '../../assets/svg/wikipedia-w.svg';
import { ReactComponent as Facebook } from '../../assets/svg/facebook-square.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';

const ThumbsUpIcon = styled(ThumbsUp)`
    width: ${props => props.width}em;
    fill: ${props => props.color};
`
const ThumbsDownIcon = styled(ThumbsDown)`
    width: ${props => props.width}em;
    fill: ${props => props.color};
`
const SearchIcon = styled(Search)`
    width: ${props => props.width}em;
    fill: ${props => props.color};
`
const WikipediaIcon = styled(Wikipedia)`
    width: ${props => props.width}em;
    fill: ${props => props.color};
`
const FacebookIcon = styled(Facebook)`
    width: ${props => props.width}em;
    fill: ${props => props.color};
`
const TwitterIcon = styled(Twitter)`
    width: ${props => props.width}em;
    fill: ${props => props.color};
`
export {
    ThumbsUpIcon,
    ThumbsDownIcon,
    SearchIcon,
    WikipediaIcon,
    FacebookIcon,
    TwitterIcon
};


