import React from 'react';
import './videoSection.scss';

export default class videoSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section id="features">
                <div className="container">
                    <div className="row align-items-center relevant-vide-container">
                        <iframe src="https://player.vimeo.com/video/127176495"
                                className="relevant-video"
                                frameBorder="0"
                                allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </section>
        );
    }
}