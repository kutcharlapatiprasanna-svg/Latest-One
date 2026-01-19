import React from 'react'
import './FeaturedProduct.css'
import walker from '../../assets/walker_img.png'

const FeaturedProduct = () => {
    return (
        <div className=''>
            <div className='Featured-product'>
                <h1>Featured Product</h1>
                <img src={walker} alt="Featured Product" />

                <h1>Nitro® Sprint™ Rollator</h1>
                <p>The sleek Nitro® Sprint™ Rollator
                    is designed to provide comfort,
                    convenience, and control at every turn.</p>
                <button>Shop Now</button>

            </div>

        </div>
    )
}

export default FeaturedProduct;
