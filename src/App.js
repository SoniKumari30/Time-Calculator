import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import FeedbackForm from "./Home/FeedbackForm"
import FeedbackTable from "./Home/FeedbackTable"
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap'

function App() {
  return (
    <BrowserRouter>
        <div>
        <Navbar color="dark" light expand="md" className="mb-2" >
                    <NavbarBrand href={"/"} style={{color:'white'}}>Feedback-Form</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                    <React.Fragment>
                                <NavItem>
                                    <Link className="nav-link text-light" to="/">Form</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link text-light" to="/feedback">Table</Link>
                                </NavItem>
                                </React.Fragment>
                                </Nav>
                      </Navbar>
                      
           <div className="ml-auto">
            <Switch>
            <Route path="/" component={FeedbackForm} exact={true} />
            <Route path="/feedback" component={FeedbackTable} />
            </Switch>
                </div>
        </div>
        </BrowserRouter>
  );
}

export default App;
