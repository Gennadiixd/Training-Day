import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Heatup from './components/Heatup/Heatup'
import StratAndPauseButton from './components/StratAndPauseButton/StratAndPauseButton'

const mapStateToProps = (state) => ({
  state
});

function App(props) {

  let appState = props.state.training.status; 
  return (
      <div className='App'>
        <Header state = {appState}/>
        <Route path='/Heatup' render={(props) => <Heatup />} exact />
        <Route path='/' component={StratAndPauseButton} exact />
      </div>    
  );
}

export default connect(
  mapStateToProps,
  null,
)(App);

