import React, {Component} from 'react';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar';
import ButtonGroup from '../ButtonGroup';

const StyledCardContainer = styled.div`
    display: grid;
    grid-template-rows: 80% 20%;
    width: 533px;
    height: 533px;
    background-image: url(${props => require(`../../assets/img/${props.image}`)});
`

const BottomContainer = styled.div`
    position: relative;
    align-self: flex-end;
    bottom: 3em;
    height: max-content;
    margin: 0 auto;
`
const MidContainer = styled.div`
    width: max-content;
    position: relative;
    align-self: flex-end;
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
        return(
            <StyledCardContainer image={this.props.image}>
                <MidContainer>
                    <ButtonGroup/>
                </MidContainer>
                <BottomContainer>
                    <ProgressBar/>
                </BottomContainer>
            </StyledCardContainer>
        )
    }
}


export default Card;
