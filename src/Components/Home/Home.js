import React from 'react';
import './Home.css';

const Home = ({data}) => {
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
        </div>
    );
};

export default Home;