import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { cssConstants } from '../../../config/cssConstants';
import {ThumbsUpIcon, ThumbsDownIcon} from '../../Icon/IconList'
import Button from '../../Button';

const { fire, jungle, white } = cssConstants.colors;

const StyledContainer = styled.section`
    display: grid;
    grid-template-rows: 85% 15%;
    background-color: rgba(0, 0, 0, 0.2);
    width: 450px;
    height: fit-content;
    margin-left: 6em;

`
const StyledSpan = styled.span`
    text-align: justify;
    display: block;
    font-size: ${props => props.textSize};
    color: ${white.hex};
    margin: ${props => props.margin};
    line-height: ${props => props.lineHeight};
`
const TextContainer = styled.div`
    padding: 2em;
`

const { largest, normal, small } = cssConstants.textSizes

const DescriptionCard = ({
    smallText,
    biggestText,
    description,
    moreInfo,
    bigText
}) => (

    <StyledContainer>
        <TextContainer>
            <StyledSpan textSize={small}>
                {smallText}
            </StyledSpan>
            <StyledSpan textSize={largest} margin={'0 0 0.5em 0'} lineHeight={'0.8em'}>
                {biggestText}
            </StyledSpan>
            <StyledSpan textSize={normal} margin={'0 0 1.5em 0'}>
                {description}
            </StyledSpan>
                {moreInfo}
            <StyledSpan textSize={normal} margin={'3em 0 0 0'}>
                {bigText}
            </StyledSpan>
        </TextContainer>
        <div>
            <Button 
                jungle 
                icon={<ThumbsUpIcon width={3} color={white.hex}/>} 
                width={'50%'}
                height={'100%'}
                alpha={0.8}
            />
            <Button 
                fire 
                icon={<ThumbsDownIcon width={3} color={white.hex}/>}
                width={'50%'}
                height={'100%'}
                alpha={0.8}
            />
        </div>
    </StyledContainer>
);

DescriptionCard.propTypes = {
    smallText: PropTypes.string,
    biggestText: PropTypes.string,
    description: PropTypes.string,
    moreInfo: PropTypes.element,
    bigText: PropTypes.string,
};

DescriptionCard.defaultProps = {
    smallText: '',
    biggestText: '',
    description: '',
    moreInfo: <div/>,
    bigText: '',
}

export default DescriptionCard;