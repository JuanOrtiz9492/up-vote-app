import React from 'react';
import styled from 'styled-components';
import { FacebookIcon, TwitterIcon } from '../Icon/IconList'
import { cssConstants } from '../../config/cssConstants.js'

const { coal } = cssConstants.colors;

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    border-top: dotted 2px;
    width: 100%;
    justify-content: space-between;
`
const StyledLink = styled.a`
`
const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const TextContainer = styled.span`
    margin: 0 1em;
    height: fit-content;
    align-self: center;
    color: ${coal.hex};
`
const IconContainer = styled.div`
    margin: 0 1em;
    height: fit-content;
    align-self: center;
`

const Footer = ()=>(
    <StyledFooter>
        <LinksContainer>
            <p>asd</p>
            <p>asd</p>
            <p>asd</p>
        </LinksContainer>
        <LinksContainer>
            <TextContainer>Follow Us</TextContainer>
            <IconContainer>
                <FacebookIcon width={2} color={coal.hex}/>
            </IconContainer>
            <IconContainer>
                <TwitterIcon width={2} color={coal.hex}/>
            </IconContainer>
        </LinksContainer>
    </StyledFooter>
);

export default Footer;