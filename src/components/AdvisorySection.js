import React from 'react'
import "./AboutUs.css";

const AdvisorySection = () => {
    return (
        <div className="aboutUs">
            <div className="aboutUs__left">
                <h1 className="aboutUs__header">Advisory </h1>
                <p className="aboutUs__text">
                    REVE MEA history speaks for itself, operating in the real estate field for over 10 years by offering a variety of services, whether its property consulting, sell or buy decisions based on the market situation and ensuring utmost satisfaction for our clients by knowing their real property needs. Our dedicated team is always up for the challenge through continuous market study to predict the future trends and locations worth the investment.

                    A highly competent and well-trained agents helps you know how to deal with each project, whether to acquire or to sell based on the study of its life span. REVE is the partner to trust for all property work ranging from market understanding, big investments or even building your real-estate portfolio in proper style. Dream Big with REVE

                </p>
            </div>
            <div className="aboutUs__right">
                <img className="aboutUs__img" src="https://i.imgur.com/JRt168l.jpg" alt="advising" />
            </div>
        </div>
    )
}

export default AdvisorySection