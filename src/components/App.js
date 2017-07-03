import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Index from './index/Index';
import Experience from './experience/Experience';
import './app.scss';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route path='/' exact component={Index}/>
                    <Route path='/experience' exact component={Experience}/>
                </div>
            </Router>
        );
    }
}
