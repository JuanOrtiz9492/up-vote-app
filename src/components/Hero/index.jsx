import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';
import { constants } from '../../config/constants';
import { cssConstants } from '../../config/cssConstants';
import DescriptionCard from './components/DescriptionCard.jsx';
import RemainingTimeBar from '../RemainingTimeBar';

const { background, navBar } = constants.hero;

const StyledContainer = styled.div`
    display: grid;
    grid-template-rows: 20% 72% 8%;
    background-image: url(${props => require(`../../assets/img/${props.image}`)});
    width: ${background.width};
    height: ${background.height};
`
const StyledLink = styled.a`
    text-decoration:none;
    display:block;
    width: max-content;
    color: ${cssConstants.colors.white.hex};
`
const {
    smallText, 
    biggestText,
    description,
    moreInfo,
    bigText
} = constants.hero.character

const Hero = ({}) => (
    <StyledContainer image={background.fileName}>
        <NavBar title={navBar.title} linkArray={navBar.linkArray}/>
        <DescriptionCard 
            smallText={smallText}
            biggestText={biggestText}
            description={description}
            moreInfo={
                <StyledLink href={moreInfo.link}>
                    {moreInfo.icon(1,'#ffffff')}
                    {moreInfo.text}
                </StyledLink>
                }
            bigText={bigText}
        />
        <RemainingTimeBar value={22} maxValue={35}/>
    </StyledContainer>
);

export default Hero;