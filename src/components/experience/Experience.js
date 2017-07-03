import React from 'react';
import './Experience.scss';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import ContentExperience from './contentExperience/contentExperience';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.state = {path: this.props.location.pathname};
    }

    render() {
        return (
            <div id="experience-container">
                <NavBar path={this.state.path}/>
                <ContentExperience/>
                <Footer/>
            </div>
        );
    }
}
