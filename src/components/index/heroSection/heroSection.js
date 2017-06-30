import React from 'react';
import './heroSection.scss';

export default class heroSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section id="banner">
                <div className="container-fluid">
                    <div className="container-fluid row justify-content-center">
                        <div className="col-sm-8 col-md-8 col-lg-auto">
                            <h1 id="cm-hero-headline">The Premier LIVE Phone-call Customer Loyalty Service.</h1>
                            <div className="cm-hero-description">
                                <p>
                                    While other companies offer Customer Retention & Loyalty Programs that will rack-up
                                    costs with
                                    texts, emails and even direct mail to communicate to your customers, Caller Mate has
                                    a different
                                    approach…
                                </p>
                                <p>
                                    Using our unique Predictive-logic Data Analyzer ‘PDA’, we first identify which
                                    customers to
                                    contact
                                    and then ‘cut to the chase’ by contacting those customers with a live and friendly
                                    phone call at
                                    just the right time.
                                </p>
                                <p>
                                    Caller Mate proves that a live phone call and conversation at just the right time is
                                    the most
                                    effective AND cost effective way to engage your customers and drive loyalty to your
                                    dealership.
                                </p>
                                <div className="cm-customer-login-container">
                                    <a href="https://callermate.com/" target="_blank" className="cm-customer-login">Customer
                                        login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}