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
    constructor(props){
        super(props);
        this.state = {
            isUpVoteSelected: false,
            isDownVoteSelected: false,
            isVoteSend: false
        }
    }
    handleUpVote = ()=> {
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

    handleVoteSend = () => {
        const { isUpVoteSelected, isDownVoteSelected } = this.state;
        const { voteHandler } = this.props;
        if(isUpVoteSelected) {
            voteHandler('upVote')
        } else if (isDownVoteSelected) {
            voteHandler('downVote')
        }

        if(isUpVoteSelected || isDownVoteSelected){
            this.setState({
                isVoteSend: true,
                isUpVoteSelected: false,
                isDownVoteSelected: false,
            })
            this.props.setIsVoteSend(true);
        } else {
            this.setState({isVoteSend: false})
            this.props.setIsVoteSend(false);
        }
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
                        jungle 
                        icon={<ThumbsUpIcon width={1.2} color={colors.white.hex}/>} 
                        checked={isUpVoteSelected} 
                        onClick={this.handleUpVote}
                    />
                    <Button 
                        fire 
                        icon={<ThumbsDownIcon width={1.2} color={colors.white.hex}/>} 
                        checked={isDownVoteSelected} 
                        onClick={this.handleDownVote}
                    />
                </>}
                <Button label={isVoteSend ? "vote again" : "vote now"} onClick={this.handleVoteSend}/>
            </VotesContainer>
            </>
        )
    }
}

export default ButtonGroup;
