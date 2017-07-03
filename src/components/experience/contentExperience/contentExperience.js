import React from 'react';
import './contentExperience.scss';
import NextSection from '../../index/nextSection/nextSection';

export default class contentExperience extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="experience-container">
                <section id="banner">
                    <div className="container-fluid">
                        <div className="container-fluid row justify-content-center">
                            <div className="col-sm-8 col-md-8 col-lg-auto">
                                <h1 id="cm-hero-headline">History & Experience</h1>
                                <div className="cm-history">
                                    <p>
                                        Caller Mate began with one of its founders following in his father’s and
                                        grandfather’s footsteps by joining the retail automobile business in 1981.
                                        Progressing to GM and Director of Sales of all twelve dealerships, eventually
                                        led to the creation of a ten member BDC, making Survey, Be-back and Service
                                        Appointment calls for the entire group.
                                    </p>
                                    <p>
                                        30+ years later, after leaving the business and forming Effective Callers Inc.,
                                        a call center providing Service Appointment calls for new car dealerships,
                                        including some of the largest in the country, the idea to create a PHONE-CALL
                                        ONLY Customer Retention & Loyalty Program was conceived.
                                    </p>
                                    <p>
                                        Then, with the chance meeting and now partnership with one of the most
                                        experienced data & technology people in the auto industry, Caller Mate was born.
                                    </p>
                                    <p>
                                        Today, with the Predictive-logic Data Analyzer ‘PDA’ system they created,
                                        combined with an exceptional team of call agents, Caller Mate offers Dealers an
                                        extremely effective Customer Retention & Loyalty Program with a measurable and
                                        substantial ROI.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <NextSection/>
            </div>
        );
    }
}
