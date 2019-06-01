import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import StratAndPauseButton from './components/StratAndPauseButton/StratAndPauseButton'
import Timer from './components/Timer/Timer'

function App() {
  const [state, setstate] = useState('Welcome')
  const [timerState, settimerState] = useState(null)

  return (
    <Router>
      <div className='App'>
        <Header state={state} />
        <StratAndPauseButton setstate={setstate} settimerState = {settimerState}/>
        {timerState && <div><Timer time = {timerState} /></div>}
        {/* <Route path='/Assesment' component={Assesment} exact/> */}
      </div>
    </Router>
  );
}

export default App;