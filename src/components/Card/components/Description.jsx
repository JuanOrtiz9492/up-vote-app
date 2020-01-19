import React from 'react'; 
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { cssConstants } from '../../../config/cssConstants';

const Container = styled.section`
    margin-left: 0.5em;
    display: flex;
    flex-direction: column;
    width: min-content;

`
const NameLabel = styled.h2`
    line-height: 1em;
    font-size: ${cssConstants.textSizes.large};
    text-transform: capitalize;
    margin: 0;
    color: ${cssConstants.colors.white.hex};
    text-align: left;
    width: 450px;
`
const LastUpdate = styled.p`
    font-size: ${cssConstants.textSizes.small};
    margin: 0;
    color: ${cssConstants.colors.white.hex};
    text-align: left;
`
const AditionalText = styled.p`
    font-size: ${cssConstants.textSizes.normal};
    margin: 0;
    color: ${cssConstants.colors.white.hex};
    text-align: left;
`
const Description = ({name, lastUpdate, aditionalText}) => (
    <Container>
        <NameLabel>{name}</NameLabel>
        <LastUpdate>{lastUpdate}</LastUpdate>
        <AditionalText>{aditionalText}</AditionalText>
    </Container>
);

Description.propTypes = {
    name: PropTypes.string,
    lastUpdate: PropTypes.string,
    aditionalText: PropTypes.string,
};

Description.defaultProps = {
    name: '',
    lastUpdate: '',
    aditionalText: '',
}

export default Description
