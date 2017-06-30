import React from 'react';
import './Footer.scss';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <footer id="footer">
                <div className="container-fluid justify-content-center cm-footer-container">
                    <div className="row justify-content-center cm-social-networks">
                        <a href="">facebook</a>&nbsp;|&nbsp;
                        <a href="">twitter</a>&nbsp;|&nbsp;
                        <a href="">google</a>&nbsp;|&nbsp;
                        <a href="">linkedin</a>&nbsp;|&nbsp;
                        <a href="">instagram</a>&nbsp;|&nbsp;
                        <a href="">youtube</a>
                    </div>
                    <div className="row justify-content-center cm-copyrigth">
                        <p>© Caller Mate, 2017</p>
                    </div>
                </div>
            </footer>
        );
    }
}
