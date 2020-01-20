import React, {Component} from 'react';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar';
import ButtonGroup from '../ButtonGroup';
import Description from './components/Description';
import {ThumbsUpIcon, ThumbsDownIcon} from '../Icon/IconList'
import { cssConstants } from '../../config/cssConstants';

const StyledCardContainer = styled.div`
    display: grid;
    grid-template-rows: 87% 13%;
    width: 533px;
    height: 533px;
    background-image: url(${props => require(`../../assets/img/${props.image}`)});
    @media(max-width: 800px){
        margin: 2em 0;
    }
`

const BottomContainer = styled.div`
    position: relative;
    align-self: flex-end;
    bottom: 3em;
    height: max-content;
    margin: 0 auto;
`
const MidContainer = styled.div`
    width: fit-content;
    position: relative;
    align-self: flex-end;
    display: grid;
    grid-template-columns: 2.6em 1fr;
`

const StyledIcon = styled.div`
    padding: 0.3em;
    margin-top: 0.5em;
    background-color: ${props => props.color};
    height: 2em;
    width: max-content;
`


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positiveVotes: 0,
            negativeVotes: 0
        }
    }
    render(){
        const {
            image,
            name,
            lastUpdate,
            aditionalText
        } = this.props;

        const {
            fire,
            jungle,
            white
        } = cssConstants.colors;
        return(
            <StyledCardContainer image={image}>
                <MidContainer>
                    {true ? 
                        <StyledIcon color={fire.hex}>
                            <ThumbsUpIcon width={1.8} color={white.hex}/>        
                        </StyledIcon> : 
                        <StyledIcon color={jungle.hex}>
                            <ThumbsDownIcon width={1.8} color={white.hex}/>        
                        </StyledIcon>
                    }
                    <Description name={name} lastUpdate={lastUpdate} aditionalText={aditionalText}/>
                    <div/>
                    <ButtonGroup />
                </MidContainer>
                <BottomContainer>
                    <ProgressBar/>
                </BottomContainer>
            </StyledCardContainer>
        )
    }
}


export default Card;
