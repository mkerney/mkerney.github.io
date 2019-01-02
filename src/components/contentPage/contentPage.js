import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import MyImage from '../../assets/images/mineNew.jpeg';
import ArrowRight from '../../assets/images/right-arrow.png';
import RatingStars from '../ratingStars/ratingStars'

export default class ContentPage extends Component {
	render() {
		return (
			<div className="content-page-section">
				<h3 className="content-header d-flex align-items-center justify-content-between">
					<Link to="/" className="arrow-left"><img src={ArrowRight} alt="arrow left"/></Link>
					<span>Here I am!</span>
					<Link to="#" className="arrow-right-section d-flex align-items-center"><img src={ArrowRight} className="arrow-right" alt="arrow right"/>Click here</Link>
				</h3>
				<div className="profile-intro">
					<div className="profile-image-wrapper">
						<img src={MyImage} alt="It's me Mohan" className="profile-image" />
						<span className="profile-name d-flex align-items-center justify-content-center">
							Mohan k
						</span>
					</div>
					<div className="profile-content-wrapper">
						<div className="profile-content-rating">
							<RatingStars ratingName="HTML" rateNumber="html-number" rateOriginal="9"/>
							<RatingStars ratingName="CSS" rateNumber="css-number" rateOriginal="9"/>
							<RatingStars ratingName="Bootstrap" rateNumber="bootstrap-number" rateOriginal="9"/>
						</div>
						<div className="profile-content-">

						</div>
					</div>
				</div>
			</div>
		)
	}
}