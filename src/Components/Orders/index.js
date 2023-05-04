import React from 'react'


const Orders = (props) => {
    const ordersList = props.order1
    // console.log(ordersList[0])
    return (
        <div>
            <h1>My Orders</h1>
            {ordersList.map(each => (
                <div className='food-card'>
                    <div className='card'>
                        <h2>{each.details.dish_name}</h2>
                        <span className='tag'>{each.details.dish_currency} &nbsp;{each.details.dish_price}</span>
                        <span className='descript'>{each.details.dish_description.split('-').join(' ')}</span>
                    </div>
                    <div className='card-2'>
                        <p>{each.details?.dish_calories}calories</p>
                        <img src={each.details?.dish_image}
                            alt='food' height={100} width={100} />
                    </div>
                </div>

            )

            )}

        </div>
    )
}

export default Orders
