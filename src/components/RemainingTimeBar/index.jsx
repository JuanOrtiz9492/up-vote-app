import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { cssConstants } from '../../config/cssConstants'

const { pearlRiver, white, coal } = cssConstants.colors;
const BarContainer = styled.div`
    display: flex;
    width: 100%;
    heigt: 100%;
    background rgba(${pearlRiver.r}, ${pearlRiver.g}, ${pearlRiver.b}, 0.6);
`
const ProgresBar = styled.div`
    display: flex;
    width: ${props => props.value}%;
    height: 100%;
    background: rgba(0,0,0, 0.2);
    position: relative;
    justify-content: flex-end;
    z-index:1;
    &::before{
        position: absolute;
        top: 35%;
        right:-0.8em;
        content: '';
        width: 0;
        height: 0;
        border-top: 0.5em solid transparent;
        border-left: 0.8em solid rgba(0,0,0, 0.2);
        border-bottom: 0.5em solid transparent;
        z-index: 0;
    }

`
const StyledSpan = styled.span`
    width: fit-content;
    height: fit-content;
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    align-self: center;
    &.leftText{
        margin-right: 1em;
    }
    &.rightText{
        margin-left: 1.5em;
    }
`
const RemainingTimeBar = ({value, maxValue}) => {
    const getPercentage = (value, maxValue) => (100-(value * 100)/maxValue)
    return (
        <BarContainer>
            <ProgresBar value={getPercentage(value, maxValue)}>
                <StyledSpan 
                    className="leftText"
                    fontSize = {cssConstants.textSizes.small}
                    color = {white.hex}
                    >
                    CLOSING IN
                </StyledSpan>
            </ProgresBar>
            <StyledSpan 
                className="rightText"
                fontSize = {cssConstants.textSizes.semiMedium}
                color = {coal.hex}
                >
                {value} days
            </StyledSpan>
        </BarContainer>
    );
}

RemainingTimeBar.propTypes = {
    value: PropTypes.number,
    maxValue: PropTypes.number,
};

RemainingTimeBar.defaultProps = {
    value:20,
    maxValue: 100,
}

export default RemainingTimeBar;
