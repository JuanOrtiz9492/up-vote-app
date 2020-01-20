import React from 'react';
import styled from 'styled-components';
import Candidates from '../../components/Candidates';
import { constants } from '../../config/constants';
import { cssConstants } from '../../config/cssConstants';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import {SearchIcon} from '../../components/Icon/IconList';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const backgroundImage = require('../../assets/img/CrowdedPlace.jpg')

const MainWraper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background: white;
    width: max-content;
    align-items: center;
`
const SectionWraper = styled(MainWraper)`
    width: min-content;
`
const StyledSpan = styled.span`
    align-self: flex-start;
    margin: ${props => props.margin};
    &.center{
        align-self: center;
    }
`

const LeftSpan = styled(StyledSpan)`
    display: flex;
    flex-direction: column;
`


const Main = () => (
    <MainWraper>
        <Hero/>
        <SectionWraper>
            <Banner 
                background={cssConstants.colors.pearlRiver.hex}
                template={'20% 75% 5%'}
                margin={'2em 0 0 0'}
            >
                <LeftSpan>
                    <p>Speak out. Be heard.</p>
                    <strong>Be counted</strong>
                </LeftSpan>
                <StyledSpan>
                    <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
                </StyledSpan>
                <StyledSpan className="center">
                    X
                </StyledSpan>
            </Banner>
            <StyledSpan margin={'2em 0'}>
                Votes
            </StyledSpan>
            <Candidates candidates={constants.candidates}/>
            <Banner
                background={`url(${backgroundImage})`}
                template={'50% 50%'}
                margin={'2em'}
            >
                <p>Is there anyone else you would want us to add?</p>
                <Button label={'Submit a Name'}/>
            </Banner>
            <Footer/>
        </SectionWraper>
    </MainWraper>
);

export default Main;