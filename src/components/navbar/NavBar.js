import React from 'react';
import './Navbar.css';
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
                                <li className="cm-labels-nav-active" href="#">home</li>
                                <li className="cm-labels-nav-disabled" href="#">our experience</li>
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
