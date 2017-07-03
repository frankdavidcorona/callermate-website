import React from 'react';
import './Index.scss';
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';
import HeroSection from '../index/heroSection/heroSection';
import VideoSection from '../index/videoSection/videoSection';
import FeatureSection from '../index/featureSection/featureSection';
import DividerSection from '../index/dividerSection/dividerSection';
import FAQSection from '../index/faqSection/faqSection';
import NextSection from '../index/nextSection/nextSection';

export default class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {path: this.props.location.pathname};
    }

    render() {
        return (
            <div id="index-container">
                <NavBar path={this.state.path}/>
                <HeroSection/>
                <VideoSection/>
                <FeatureSection/>
                <DividerSection/>
                <FAQSection/>
                <DividerSection/>
                <NextSection/>
                <Footer/>
            </div>
        );
    }
}