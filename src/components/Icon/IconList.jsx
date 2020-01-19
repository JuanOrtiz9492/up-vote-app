import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ThumbsUp } from '../../assets/svg/thumbs-up.svg';
import { ReactComponent as ThumbsDown } from '../../assets/svg/thumbs-down.svg';

const ThumbsUpIcon = styled(ThumbsUp)`
    width: ${props => props.width}em;
`
const ThumbsDownIcon = styled(ThumbsDown)`
    width: ${props => props.width}em;
`

export {ThumbsUpIcon,
    ThumbsDownIcon};


