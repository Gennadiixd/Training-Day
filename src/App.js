import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import StratTestButton from './components/StratTestButton/StratTestButton'

function App() {
  const [state, setstate] = useState('Welcome')

  return (
    <Router>
      <div className = 'App'>
        <Header state={state} />
        <StratTestButton setstate = {setstate}/>
        {/* <Route path='/Assesment' component={Assesment} exact/> */}
      </div>
    </Router>
  );
}

export default App;
