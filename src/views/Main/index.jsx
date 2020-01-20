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

const { pearlRiver, coal } = cssConstants.colors

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
    @media (max-width: 800px) {
        width: 70%;
    }
`
const StyledSpan = styled.span`
    align-self: flex-start;
    margin: ${props => props.margin};
    font-size: ${props => props.fontSize};
    text-align: justify;
    color: ${coal.hex};
    &.axis-center{
        justify-self: center;
    }
    &.transversal-center{
        align-self: center;
    }
    &.fit{
        width: fit-content;
    }
`
const LeftSpan = styled(StyledSpan)`
    display: flex;
    flex-direction: column;
`
const StyledStrong = styled.strong`
    font-size: ${props => props.fontSize};
    width: fit-content;
    align-self: center; 
`

const {
    exLarge,
    large,
    medium,
    semiMedium,
    normal,
    small 
} = cssConstants.textSizes

const Main = () => (
    <MainWraper>
        <Hero/>
        <SectionWraper>
            <Banner 
                background={pearlRiver.hex}
                template={'25% 70% 5%'}
                margin={'2em 0 0 0'}
            >
                <LeftSpan>
                    <StyledSpan className='transversal-center' fontSize={semiMedium}>Speak out. Be heard.</StyledSpan>
                    <StyledStrong fontSize={medium}>Be counted</StyledStrong>
                </LeftSpan>
                <StyledSpan fontSize={normal}>
                    <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
                </StyledSpan>
                <StyledSpan className="transversal-center axis-center fit">
                    X
                </StyledSpan>
            </Banner>
            <StyledSpan margin={'1em 0'} fontSize={large}>
                Votes
            </StyledSpan>
            <Candidates candidates={constants.candidates}/>
            <Banner
                background={`url(${backgroundImage})`}
                template={'80% 20%'}
                margin={'2em'}
                padding={'1em'}
            >
                <StyledSpan className='fit transversal-center' fontSize={medium}>Is there anyone else you would want us to add?</StyledSpan>
                <Button label={'Submit a Name'} color={'#000000'}/>
            </Banner>
            <Footer/>
        </SectionWraper>
    </MainWraper>
);

export default Main;