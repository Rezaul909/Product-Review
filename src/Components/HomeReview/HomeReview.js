import React from 'react';
import './HomeReview.css';

const HomeReview = (props) => {
    const {name, img, about,phone, email,ratings} = props.review;
    return (
        <div className='m-10'>
            <div className='review-cart border-2 border-purple-800'>
                <img className='w-24' src={img} alt="" />
                <p className='p-5'>{about}</p>
                <div className='user-info m-10'>
                    <div>
                        <h1 className='pt-5'>{name}</h1>
                        <h6>{phone}</h6>
                        <p><small>{email}</small></p>
                    </div>
                    <div>
                        <p className='mt-16'>Ratings: {ratings}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;