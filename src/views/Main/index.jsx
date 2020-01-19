import React from 'react';
import styled from 'styled-components';
import Candidates from '../../components/Candidates';
import { constants } from '../../config/constants';
import Hero from '../../components/Hero';
import {SearchIcon} from '../../components/Icon/IconList';

const Wraper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: white;
    width: max-content;
    align-items: center;
`

const Main = () => (
    <Wraper>
        <Hero/>
        <Candidates candidates={constants.candidates}/>
        <SearchIcon width={1}/>
    </Wraper>
);

export default Main;