import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TypeWriteEffect from '../typeWriter/typeWriter';
import ArrowRight from '../../assets/images/right-arrow.png';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page-section">
                <Link to="/content" className="content-route d-flex align-items-center">
                    <img src={ArrowRight} className="arrow-right" alt="arrow right"/>
                    <span>Click here</span>
                </Link>
                <div className="headerOne d-flex">
                    <span className="headerOneStatic">I'm </span>
                    <span className="headerOneTypewriter"><TypeWriteEffect/></span>
                </div>
            </div>
        )
    }
}
