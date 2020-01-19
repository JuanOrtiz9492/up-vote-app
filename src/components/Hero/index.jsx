import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';
import { constants } from '../../config/constants';

const { background, navBar } = constants.hero;

const StyledContainer = styled.div`
    display: grid;
    grid-template-rows: 20% 70% 10%;
    background-image: url(${props => require(`../../assets/img/${props.image}`)});
    width: ${background.width};
    height: ${background.height};
`

const Hero = ({}) => (
    <StyledContainer image={background.fileName}>
        <NavBar title={navBar.title} linkArray={navBar.linkArray}/>
        <div>dois</div>
        <div>tres</div>
    </StyledContainer>
);

export default Hero;