import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from './components/Header';
import Evaluation from './components/Evaluation';
import Interactions from 'components/Interactions';
import Feedback  from 'components/Feedback';
import Offer from 'components/Offer';
import Learnings from 'components/Learnings';
import Footer from 'components/Footer';

function App() {
  return (
    <Router>
       <div className="App">
         <Header />
         <Evaluation />
         <Interactions />
         <Offer /> 
         <Feedback />
         <Learnings />
         <Footer />
      </div>
    </Router>
   
  );
}

export default App;
