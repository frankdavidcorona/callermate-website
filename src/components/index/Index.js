import React from 'react';
import './Index.scss';
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';
import HeroSection from '../index/heroSection/heroSection';
import VideoSection from '../index/videoSection/videoSection';
import FeatureSection from '../index/featureSection/featureSection';
import DividerSection from '../index/dividerSection/dividerSection';
import FAQSection from '../index/faqSection/faqSection';

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
                <VideoSection/>
                <FeatureSection/>
                <DividerSection/>
                <FAQSection/>
                <DividerSection/>
                <Footer/>
            </div>
        );
    }
}