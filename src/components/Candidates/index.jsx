import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from '../Card';
import Spiner from '../Spiner';
import { constants } from '../../config/constants'

const { size } = constants.photos;
const Container = styled.div`
    display: grid;
    grid-gap: 3em ;
    grid-template-columns: repeat(2, ${size});
    grid-template-rows: repeat(2, ${size});
    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
    }
`
const SpinerContainer = styled.div`
    width: 50vw;
    padding: 3em;
`

class Candidates extends React.Component {
    constructor(props){
        super(props);
        this.state={
            candidates:[],
            loading: true,
        }
    }
    componentDidMount(){
        axios.get('/candidates')
            .then( response => {
                this.setState({
                    candidates: response.data,
                    loading: false
                })
            })
    }

    updateVotes = (id, upVotes, downVotes) => {
        let person;
        this.setState( prevState =>{
            person = prevState.candidates.find( person => person.id === id )
            axios.put('/updatecandidate', {...person, upvotes:upVotes, downvotes:downVotes});
            const filteredCandidates = prevState.candidates.filter( person => person.id !== id )
            return {candidates:  [...filteredCandidates, {...person, upvotes:upVotes, downvotes:downVotes}]}
        });
    }

    render(){
        const candidatesList = this.state.candidates.sort( (personA, personB) => personA.id - personB.id )
        return(
            this.state.loading ? 
            <SpinerContainer>
                <Spiner/>
            </SpinerContainer> :
            <Container>
                {candidatesList.map( candidate => ( 
                <Card 
                    id ={candidate.id}
                    key={candidate.id} 
                    image={candidate.filename}
                    name={candidate.name}
                    lastUpdate={candidate.lastupdate}
                    aditionalText={candidate.aditionaltext}
                    upVotes={candidate.upvotes}
                    downVotes={candidate.downvotes}
                    voteHandler={this.updateVotes}
                />)
                )}
            </Container>
        )}
    }

export default Candidates;
