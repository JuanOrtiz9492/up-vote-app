import React from 'react';
import {constants} from '../../config/constants';
import styled from 'styled-components';

const StyledProgressBar = styled.progress`
    &[value] {
    -webkit-appearance: none;
    appearance: none;
    width: 250px;
    height: 30px;

    &::-webkit-progress-bar {
        background-color: #b37a15;
        border-radius: 2px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
      }

    &::-webkit-progress-value {
        background-color: #14847f;    
    }
  }

  

  
`

const ProgressBar = props => {
    const { maxValue } = constants.progressBar;
    return <StyledProgressBar value="30" max={maxValue}/>
}

export default ProgressBar;