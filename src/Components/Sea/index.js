import React from 'react'
import { useState } from 'react';

const Sea = (props) => {
    const { details, addToCart, myOrders } = props;
    console.log(details,'se')
    const [count, setCount] = useState(0)

    const Increase = () => {
        setCount(count => count + 1)
    }
    const decrease = () => {
        if (count > 1) {
            setCount(count => count - 1)
        }
    }

    const addCart = () => {
        if (count >= 1) {
            addToCart(count)
        }
    }

    const AddOrders = () => {
        myOrders(details, count)
    }
    return (
        <div className='food-card'>
            <div className='card-1'>
                <p className='circle-icon'><span></span></p>
                <div className='card'>
                    <h4>{details?.dish_name}</h4>
                    <span className='tag'>{details?.dish_currency} &nbsp;{details?.dish_price}</span>
                    <span className='descript'>{details?.dish_description}</span>
                    <div className='btn-card'>
                        <button onClick={Increase}>+</button>
                        <p>{count}</p>
                        <button onClick={decrease}>-</button>
                    </div>
                    {details?.dish_Availability ? (<p> </p>) : (<p className='err'>Not Available</p>)}
                    {details?.dish_Availability ? <button onClick={() => (addCart(), AddOrders())} className='add-btn'>Add to Cart</button> : ''}
                </div>
            </div>
            <div className='card-2'>
                <p>{details?.dish_calories}calories</p>
                <img src={details?.dish_image}
                    alt='food' height={100} width={100} />
            </div>
        </div>
    )
}

export default Sea