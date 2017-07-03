import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';
import Logo from '../../public/images/logo.jpg';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <header id="header" className="alt container">
                <div className="row align-items-start">
                    <div className="col-xs-12 col-md-4">
                        <h1 id="logo">
                            <img className="cm-img-nav"
                                 src={Logo}/>
                        </h1>
                    </div>
                    <div className="col-xs-12 col-md-8">
                        <nav id="nav">
                            <ul>
                                <Link to="/">
                                    <li className={(this.props.path === '/') ? 'cm-labels-nav-active' : 'cm-labels-nav-disabled'}>
                                        home
                                    </li>
                                </Link>
                                <Link to="/experience">
                                    <li className={(this.props.path === '/experience') ? 'cm-labels-nav-active' : 'cm-labels-nav-disabled'}>
                                        our experience
                                    </li>
                                </Link>
                                <li className="cm-labels-nav-disabled" href="#">pricing & results</li>
                                <li className="cm-labels-nav-disabled" href="#">contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
