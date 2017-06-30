import React from 'react';
import './Index.scss';
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';
import HeroSection from '../index/heroSection/heroSection';

export default class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div id="index-container">
                <NavBar/>
                <HeroSection/>
                <Footer/>
            </div>
        );
    }
}