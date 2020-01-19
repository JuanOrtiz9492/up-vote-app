import React from 'react';
import styled from 'styled-components';
import './App.css';
import {
  	BrowserRouter as Router,
  	Switch,
  	Route
} from "react-router-dom";

import Main from './views/Main';
import StyledBlank from './views/PastTrials';

function App() {

  return (
    <div className="App">
		<Router>
			<Switch>
				<Route path="/" component={Main} exact/>
				<Route path="/past-trials" component={StyledBlank}/>
			</Switch>
		</Router>
    </div>
  );
}

export default App;
