import React, {Component} from 'react';
import styled from 'styled-components';
import Button from '../Button';
import {ThumbsUpIcon, ThumbsDownIcon} from '../Icon/IconList'
import { cssConstants } from '../../config/cssConstants';

const VotesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 15em;
    margin: 1em 0;
`

class ButtonGroup extends Component {
    constructor(){
        super();
        this.state = {
            isUpVoteSelected: false,
            isDownVoteSelected: false,
            isVoteSend: false
        }
    }
    handleUpVote = (e)=> {
        this.setState({
            isUpVoteSelected: true,
            isDownVoteSelected: false,
        });
    }

    handleDownVote = ()=> {
        this.setState({
            isUpVoteSelected: false,
            isDownVoteSelected: true,
        });
    }
    render () {
        const {
            isUpVoteSelected,
            isDownVoteSelected,
            isVoteSend,
        } = this.state;
        const { colors } = cssConstants;
        return (
            <>
            <VotesContainer>
                {!isVoteSend && 
                <>
                    <Button 
                        fire 
                        icon={<ThumbsUpIcon width={1.2} color={colors.white.hex}/>} 
                        checked={isUpVoteSelected} 
                        onClick={this.handleUpVote}
                    />
                    <Button 
                        jungle 
                        icon={<ThumbsDownIcon width={1.2} color={colors.white.hex}/>} 
                        checked={isDownVoteSelected} 
                        onClick={this.handleDownVote}
                    />
                </>}
                <Button label={isVoteSend ? "vote again" : "vote now"}/>
            </VotesContainer>
            </>
        )
    }
}

export default ButtonGroup;
