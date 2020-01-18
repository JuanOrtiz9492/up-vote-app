import React from 'react';
import './iconList.css';
import { ReactComponent as ThumbsUp } from '../../assets/svg/thumbs-up.svg';
import { ReactComponent as ThumbsDown } from '../../assets/svg/thumbs-down.svg';

const ThumbsUpIcon = () => <ThumbsUp className="svg-icon"/>
const ThumbsDownIcon = () => <ThumbsDown className="svg-icon"/>

export {ThumbsUpIcon,
    ThumbsDownIcon};


