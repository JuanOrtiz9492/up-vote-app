import React from 'react';
import styled from 'styled-components';
import './App.css';
import Card from './components/Card';
import Candidates from './components/Candidates';
import { constants } from './config/constants';
import Hero from './components/Hero';

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: white;
  width: max-content;
  align-items: center;
`
function App() {

  return (
    <div className="App">
      <Wraper>
        <Hero/>
        <Candidates candidates={constants.candidates}/>
      </Wraper>
    </div>
  );
}

export default App;
