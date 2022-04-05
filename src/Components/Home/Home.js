import React from 'react';
import { Link } from 'react-router-dom';
import HomeReview from '../HomeReview/HomeReview';
import useData from '../Hooks/useData';
import './Home.css';

const Home = ({data}) => {

    const [reviews, setReviews] = useData();

    return (
        <div>
            <div className='home-container'>
                <div className="product-derails">
                    <h1 className='text-6xl mt-20 text-sky-900'>{data.name}</h1>
                    <p className='text-xl m-12'>{data.about}</p>
                    <button className='bg-green-400 py-3 px-10 rounded-lg text-xl font-semibold'>
                        Live Demo
                    </button>
                </div>
                <div className="image-container">
                    <img src={data.picture} alt="" />
                </div>
            </div>

            <div className='my-16'>
                <h1 className='text-4xl mb-10'>Customer Reviews</h1>
                <div className='home-review-container'>
                    {
                        reviews.slice(0,3).map(review => <HomeReview key={review.id} review={review}></HomeReview>)
                    }
                </div>

                <Link to='/Review'>
                    <button className='bg-cyan-500 py-3 px-10 rounded-lg text-xl font-semibold'>
                        See all Reviews
                    </button>
                </Link>
            </div>
            
        </div>
    );
};

export default Home;