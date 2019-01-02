import React, { Component } from 'react'
import classnames from 'classnames'

export default class RatingStars extends Component {

    render() {
        return (
            <div className="rating-stars-section">
                <div className="rating-content d-flex align-items-center justify-content-between">
                    <h4 className="rating-name">{this.props.ratingName}</h4>
                    <div className={classnames("rating-stars d-flex align-items-center justify-content-center", (this.props.rateNumber))}>
                        <span className="rating-star"></span>
                        <span className="rating-star"></span>
                        <span className="rating-star"></span>
                        <span className="rating-star"></span>
                        <span className="rating-star"></span>
                        <span className="rating-star"></span>
                        <span className="rating-star"></span>
                        <span className="rating-star"></span>
                        <span className="rating-star"></span>
                        <span className="rating-star"></span>
                        <small>{this.props.rateOriginal}/10</small>
                    </div>
                </div>
            </div>
        )
    }
}
