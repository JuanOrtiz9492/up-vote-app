import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import { constants } from '../../config/constants';
import { cssConstants } from '../../config/cssConstants';
import {ThumbsUpIcon, ThumbsDownIcon} from '../Icon/IconList';


const { fire, jungle } = cssConstants.colors;

const StyledProgressBar = styled.progress`
    position: absolute;
    top:0px;
    left: 0px;

    &[value] {
    -webkit-appearance: none;
    appearance: none;
    width: ${cssConstants.progressBar.width};
    height: 3em;

    &::-webkit-progress-bar {
        background-color: ${fire.hex};
        border-radius: 2px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
      }

    &::-webkit-progress-value {
        background-color: ${jungle.hex};    
    }
  }
`

const StyledContainer = styled.div`
    position: relative;
    width: ${cssConstants.progressBar.width};
`

const StyledPercentage = styled.div`
    position: absolute;
    top:0px;
    position: absolute;
    z-index: 10;
    margin 0 0.5em;
    &.left {
        left: 0px;
    }
    &.right {
        right: 0px;
    }
`
const StyledLabel = styled.span`
    font-size: 2em;
`

const ProgressBar = ({value, maxValue, ...props}) => (
    <StyledContainer className="progress-bar">
        <StyledPercentage className="left">
            <ThumbsUpIcon width={1.5}/>
            <StyledLabel>{`${value}%`}</StyledLabel>
        </StyledPercentage>
        <StyledPercentage className="right">
            <StyledLabel>{`${maxValue-value}%`}</StyledLabel>
            <ThumbsDownIcon width={1.5}/>
        </StyledPercentage>
        <StyledProgressBar value={value} max={maxValue}/>
    </StyledContainer>
    )

ProgressBar.propTypes = {
    value: PropTypes.number,
    maxValue: PropTypes.number,
}

ProgressBar.defaultProps = {
    value: 50,
    maxValue: 100,
}

export default ProgressBar;