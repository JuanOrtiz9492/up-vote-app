import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ThumbsUp } from '../../assets/svg/thumbs-up.svg';
import { ReactComponent as ThumbsDown } from '../../assets/svg/thumbs-down.svg';
import { ReactComponent as Search } from '../../assets/svg/search.svg';

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

export {
    ThumbsUpIcon,
    ThumbsDownIcon,
    SearchIcon
};


