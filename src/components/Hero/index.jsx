import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: grid;
    grid-template-rows: 25% 65% 10%;
    background-image: url(${props => require(`../../assets/img/${props.image}`)});
    width: 1200px;
    height: 630px;
`

const Hero = ({}) => (
    <StyledContainer image="PopeFrancis.jpg">
        <div>uno</div>
        <div>dois</div>
        <div>tres</div>
    </StyledContainer>
)

export default Hero;