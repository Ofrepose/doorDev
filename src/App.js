import React, { useState, useEffect } from 'react';

import Header from  './components/header/headers';
import MainPage from './components/mainPage/mainPage';
import ResourcePage from './components/resourcePage/resourcePageMain';
import  { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initialLoad, loginDeveloper } from './utils/actions/actionsIndex';

import './components/css/index.css';



function App(props) {

    const [stateMachine,setStateMachine] = useState('initial');

    useEffect(()=>{

        props.initialLoad();
        props.loginDeveloper('dfasdfasfd');

    },[])

    const changeState = (x) =>{
        setStateMachine(x);
    }

  return (

      <div className="App">

          <Route exact path = "/">

              <Header state = {stateMachine} />

              <MainPage />

          </Route>

          <Route exact path = "/developers/:id">

              <Header state = "resourcePage" />



          </Route>

          <Route exact path = "/business">

              <Header state = {stateMachine} />

          </Route>

          <Route exact path = "/developers/resources">

              <ResourcePage state = "resourcePage" changeState = {changeState} />

          </Route>



      </div>









  );
}

export const mapStateToProps = state =>{
    return{
        isLoading: state.isLoading,
        user: state.user,
        projects: state.projects,
        businesses: state.businesses,
    }
}

export default connect(mapStateToProps, { initialLoad,loginDeveloper })(App);
