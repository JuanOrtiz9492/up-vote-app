import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
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

const Candidates = ({ candidates }) => (
    <Container>
        {candidates.map( candidate => ( 
            <Card 
                key={candidate.id} 
                image={candidate.fileName}
                name={candidate.name}
                lastUpdate={candidate.lastUpdate}
                aditionalText={candidate.aditionalText}
            />)
        )}
    </Container>
)

export default Candidates;
