import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import FeedbackForm from "./Home/FeedbackForm"
import FeedbackTable from "./Home/FeedbackTable"

function App() {
  return (
    <BrowserRouter>
        <div>
            <Link to="/">Form</Link> - 
            <Link to="/feedback">Table</Link> 

            <Route path="/" component={FeedbackForm} exact={true} />
            <Route path="/feedback" component={FeedbackTable} />
        </div>
        </BrowserRouter>
  );
}

export default App;
