import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
import { heatupAC, trainingAC } from "./redux/actions/actions";

import Header from './components/Header/Header';
import Activity from './components/Activity/Activity'
import StratAndPauseButton from './components/StratAndPauseButton/StratAndPauseButton'

const mapStateToProps = (state) => ({
  state
});

function App(props) {
  
  let appState = props.state.training.status;
  let setHeatup = props.setHeatup;
  let setTraining = props.setTraining;

  return (
    <div className='App'>
      <Header state={appState} />
      <Route path='/Heatup' render={(props) => <Activity setActivity={setHeatup} fetchAdress={'/exercises/heatup'}/>} exact />
      <Route path='/Training' render={(props) => <Activity setActivity={setTraining} fetchAdress={'/exercises/training'}/>} exact />      
      {/* Route на оценку */}
      <Route path='/' component={StratAndPauseButton} exact />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setHeatup: (exercise) => { dispatch(heatupAC(exercise)) },
    setTraining: (exercise) => { dispatch(trainingAC(exercise)) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

