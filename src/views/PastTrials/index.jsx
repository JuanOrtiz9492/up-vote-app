import React from 'react';
import styled from 'styled-components'
import NavBar from '../../components/NavBar';
import { constants } from '../../config/constants';

const { navBar } = constants.hero;
const StyledBlank = styled.div`
 
    background: gray;
    width: 100%;
    height: 100%;
`

const PastTrials = () => (
    <StyledBlank>
        <NavBar title={navBar.title} linkArray={navBar.linkArray}/>
    </StyledBlank>
)
export default PastTrials;