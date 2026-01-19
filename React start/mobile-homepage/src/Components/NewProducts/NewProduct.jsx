import React from 'react';
import "./NewProduct.css"
import medical from "../../assets/medical_equipemenet.png"


const NewProducts = () => {
    return (
        <div>
            <div className='new-products'>
                <h1>New Products Corner</h1>
                <img src={medical} alt='me' />
                <h1>See Whats New from Drive!</h1>
                <p>Visit the latest product
                    innovations from Drive DeVilbiss
                    Healthcare.</p>
                <button>Explore Products</button>

            </div>

        </div>
    );
}

export default NewProducts;
