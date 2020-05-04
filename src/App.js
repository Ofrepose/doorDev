import React, { useState } from 'react';

import Header from  './components/header/headers';
import MainPage from './components/mainPage/mainPage';
import ResourcePage from './components/resourcePage/resourcePageMain';

import './App.css';



function App() {

    const [stateMachine,setStateMachine] = useState('resourcePage');

    const changeState = (x) =>{
        setStateMachine(x);
    }

  return (

      stateMachine === 'initial' ?

          <div className="App">

              <Header state = {stateMachine} />

              <MainPage />

          </div>

      :

      stateMachine === 'devPage' ?

          <div className="App">

              <Header state = {stateMachine} />

          </div>

      :

      stateMachine === 'busPage' ?

          <div className="App">

              <Header state = {stateMachine} />

          </div>

      :

      stateMachine === 'resourcePage' ?

          <div className="App">

              <ResourcePage state = {stateMachine} changeState = {changeState} />

          </div>

      :

          <div className="App">

              <Header state = {stateMachine} />

          </div>





  );
}

export default App;
