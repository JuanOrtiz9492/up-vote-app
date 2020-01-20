import React from 'react';
import styled from 'styled-components';
import { FacebookIcon, TwitterIcon } from '../Icon/IconList';
import { cssConstants } from '../../config/cssConstants';
import { constants } from '../../config/constants';

const { coal } = cssConstants.colors;

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    border-top: dotted 2px ${coal.hex};
    width: 100%;
    justify-content: space-between;
    padding: 1.5em 0;
    box-sizing: border-box;
`
const StyledLink = styled.a`
    text-decoration: none;
    color: ${coal.hex};
    margin-right: 2em;
`
const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    align-self: center;
    font-size: ${cssConstants.textSizes.small};
`
const TextContainer = styled.span`
    margin: 0 1em;
    height: fit-content;
    align-self: center;
    color: ${coal.hex};
`
const IconContainer = styled.div`
    margin-left: 2em;
    height: fit-content;
    align-self: center;
`
const Footer = ()=>(
    <StyledFooter>
        <LinksContainer>
            {constants.footer.moreInfo.map( item => (
                <StyledLink key={item.id} href={item.link}>{item.text}</StyledLink>
            ))}
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