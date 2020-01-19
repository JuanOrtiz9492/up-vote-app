import React, {Component} from 'react';
import styled from 'styled-components';
import Button from '../Button';
import {ThumbsUpIcon, ThumbsDownIcon} from '../Icon/IconList'

const VotesContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: min-content;
    padding: 1em;
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

        return (
            <>
            <VotesContainer>
                {!isVoteSend && <>
                <Button fire icon={<ThumbsUpIcon width={1.2}/>} checked={isUpVoteSelected} onClick={this.handleUpVote}/>
                <Button jungle icon={<ThumbsDownIcon width={1.2}/>} checked={isDownVoteSelected} onClick={this.handleDownVote}/>
                </>}
                <Button label={isVoteSend ? "vote again" : "vote now"}/>
            </VotesContainer>
            </>
        )
    }
}

export default ButtonGroup;
