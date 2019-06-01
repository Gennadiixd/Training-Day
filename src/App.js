import React, { useState } from 'react';
import Header from './components/Header/Header'
import ExerciseContainer from './components/ExerciseContainer'

function App() {
  const [appState, setAppState] = useState(null)
    
  return (
      <div className='App'>              
        <ExerciseContainer state={appState} setAppState = {setAppState} />        
      </div>    
  );
}

export default App;