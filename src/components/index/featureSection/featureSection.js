import React from 'react';
import './featureSection.scss';

export default class featureSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section id="use-case">
                <div className="container-fluid" style={{marginTop: 3 + '%'}}>
                    <div className="container-fluid row align-items-center">
                        <div className="col-12">
                            <h1 className="use-case-headline">Why Caller Mate must be your choice ?</h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-3 card-team">
                            <div className="col justify-content-center" style={{paddingTop: 15 + 'px'}}>
                                <h1 className="name-member">General Features</h1>
                                <p className="bio-member">NO Set-up fee</p>
                                <p className="bio-member">A month-to-month agreement</p>
                                <p className="bio-member">A two week or less new dealership startup</p>
                                <p className="bio-member">Up to nine call attempts per customer record</p>
                                <p className="bio-member">The customer's 'Caller ID' can show your dealership’s name</p>
                                <p className="bio-member">No surprise billing. Simply select the number of customers you
                                    want called
                                    each month</p>
                                <p className="bio-member">Real-time reporting. Reports can be accessed or emailed
                                    whenever
                                    you
                                    choose</p>
                            </div>
                        </div>
                        <div className="col-md-3 card-team">
                            <div className="col justify-content-center" style={{paddingTop: 15 + 'px'}}>
                                <h1 className="name-member">Outbound Service Appointment Calls</h1>
                                <p className="bio-member">We GUARANTEE you at least a 15 to 1 ROI in your first month or
                                    your money
                                    back.
                                </p>
                                <p className="bio-member">The customers called will be selected using our
                                    Predictive-logic
                                    Data
                                    Analyzer ‘PDA’ which automatically identifies when each customer was last in for
                                    service.
                                </p>
                                <p className="bio-member">Our ‘PDA’ can be set for any service interval or schedule your
                                    dealership
                                    desires.
                                </p>
                                <p className="bio-member">Calls can be made for any service type, including: first,
                                    major,
                                    past due or
                                    even recalls and special campaigns.
                                </p>
                                <p className="bio-member">We will attempt to set appointments on the days and times that
                                    your
                                    dealership prefers.
                                </p>
                                <p className="bio-member">An appointment alert will be emailed to whomever you choose in
                                    the
                                    dealership.
                                </p>
                                <p className="bio-member">An appointment confirmation will be emailed to the customer if
                                    they desire.
                                </p>
                                <p className="bio-member">A confirmation TEXT will be sent to the customer the day
                                    before
                                    their
                                    appointment.
                                </p>
                                <p className="bio-member">Appointments can be entered into your dealership’s website
                                    service
                                    scheduling system. (Optional)
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 card-team">
                            <div className="col justify-content-center" style={{paddingTop: 15 + 'px'}}>
                                <h1 className="name-member">Unsold Shopper Be-Back Calls</h1>
                                <p className="bio-member">An appointment alert will be emailed to whomever you choose in
                                    the
                                    dealership.
                                </p>
                                <p className="bio-member">Alerts will include ‘key info’ shared by the customer that
                                    will
                                    help your
                                    dealership close the sale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}