import React from 'react';
import './nextSection.scss';

export default class nextSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section id="our-team">
                <div className="container-fluid">
                    <div className="container-fluid row align-items-center">
                        <div className="col-12">
                            <h1 className="use-case-headline">What it's the next</h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{marginTop: 3 + '%'}}>
                    <div className="row justify-content-center">
                        <div className="col-md-3 card-team">
                            <div className="col justify-content-center">
                                <h1 className="name-member">Contact Caller Mate</h1>
                                <p className="bio-member">Contact with our company. Some more text.</p>
                                <div className="container justify-content-center link-container">
                                    <div className="row justify-content-center">
                                        <a href="#" className="cm-small-buttons">contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 card-team">
                            <div className="col justify-content-center">
                                <h1 className="name-member">Shedule an Appointment</h1>
                                <p className="bio-member">You can shedule an appointment. Some more text.
                                </p>
                                <div className="container justify-content-center link-container">
                                    <div className="row justify-content-center">
                                        <a href="#" className="cm-small-buttons">shedule</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 card-team">
                            <div className="col justify-content-center">
                                <h1 className="name-member">We want you</h1>
                                <p className="bio-member">Give us your feedbacks. Some more text.</p>
                                <div className="container justify-content-center link-container">
                                    <div className="row justify-content-center">
                                        <a href="#" className="cm-small-buttons">contact us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}