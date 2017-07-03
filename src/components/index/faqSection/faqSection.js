import React from 'react';
import './faqSection.scss';

export default class faqSection extends React.Component {
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
                            <h1 className="use-case-headline">Frequently Asked Questions</h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{marginTop: 3 + '%'}}>
                    <div className="row justify-content-center">
                        <div className="col-md-3 card-team">
                            <div className="col justify-content-center">
                                <h1 className="cm-faq-header">Support included</h1>
                                <p className="cm-faq-description">Support is always included and is always FREE as part
                                    of
                                    your service
                                    from Caller Mate.</p>
                            </div>
                        </div>
                        <div className="col-md-3 card-team">
                            <div className="col justify-content-center">
                                <h1 className="cm-faq-header">How to setup Caller Mate ?</h1>
                                <p className="cm-faq-description">We have a team of experts in the auto insutry that
                                    will
                                    get you set up
                                    in NO
                                    TIME! From Database extraction to the appointment setting we take care of everything
                                    soup to
                                    nuts!.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 card-team">
                            <div className="col justify-content-center">
                                <h1 className="cm-faq-header">How secure is it?</h1>
                                <p className="cm-faq-description">All communication with Caller Mate is over secure
                                    connections and
                                    analysis is
                                    performed in an encrypted environment..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}