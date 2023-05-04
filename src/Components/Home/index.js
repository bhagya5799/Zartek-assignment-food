import React, { useEffect, useState } from 'react'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import FoodItemCard from '../FoodItemCard'
import Barnyard from '../Barnyard'
import FromHouse from '../FromHouse'
import Sea from '../Sea'
import Biryani from '../Biryani'
import FastFood from '../FastFood'
import Orders from '../Orders'
import './index.css'
import { useNavigate } from "react-router-dom";
// import { tab } from '@testing-library/user-event/dist/tab'

const Home = (props) => {
    const {order1,setOrders1}=props
    const navigate = useNavigate();
    const [foodData, setFoodData] = useState([])
    const [restaurantName, setRestaurantName] = useState('')
    const [tableMenu, setTableMenu] = useState([])
    const [soups, setSoups] = useState([])
    const [barnyard, setBarnyard] = useState([])
    const [fromHouse, setFromHouse] = useState([])
    const [sea, setSea] = useState([])
    const [biryani, setBiriyani] = useState([])
    const [fastFood, setFastFood] = useState([])
    const [activeTab, setActiveTab] = useState(tableMenu[0]?.menu_category)
    const [cartItems, setCartItems] = useState(0)
    const [activeTabId, setActiveTabId] = useState(tableMenu[0]?.menu_category_id)
    const [orders,setOrders]=useState([])
    

    const addToCart = (item) => {
        setCartItems(cartItems+item)
    }

    const removeFromCart = () => {
        let TempCartItems = [...cartItems]
        TempCartItems.splice(0, 1)
        setCartItems(TempCartItems)
    }

    useEffect(() => {
        getFoodData()
    }, [])
    // console.log('cart')

    useEffect(() => {
        setRestaurantName(foodData?.restaurant_name)
        setSoups(foodData?.table_menu_list?.[0]?.category_dishes)
        setBarnyard(foodData?.table_menu_list?.[1]?.category_dishes)
        setFromHouse(foodData?.table_menu_list?.[2]?.category_dishes)
        setSea((foodData?.table_menu_list?.[3]?.category_dishes))
        setBiriyani((foodData?.table_menu_list?.[4]?.category_dishes))
        setFastFood((foodData?.table_menu_list?.[5]?.category_dishes))
    }, [foodData])

    const getFoodData = async () => {
        const url = 'https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099'
        const response = await fetch(url)
        const data = await response.json()
        setFoodData(data[0])
        setTableMenu(data[0].table_menu_list)
    }

const myOrders= (details,count) =>{
    setOrders([...orders,{details:details,count:count}])
    setOrders1([...order1,{details:details,count:count}])
}
    const getMyOrders =  () => {
        navigate("/orders");
    }
   
   
// console.log(orders,'ord2345')
    return (
        <div className='home'>
            <div className='Header'>
                <nav>
                    <h4>{restaurantName}</h4>
                    <div className='store-div'>
                        <p onClick={getMyOrders} >My Orders</p>
                        <span className='add-item-icon'><MdOutlineLocalGroceryStore /><i>{cartItems}</i></span>
                    </div>
                </nav>

            </div>
            <div className='Mobile-view'>
                <nav>
                    <span><i><AiOutlineArrowLeft /></i></span>
                    <h4>{restaurantName}</h4>
                    <div className='store-div'>
                        <p>My Orders</p>
                        <span className='add-item-icon'><MdOutlineLocalGroceryStore /><i>{cartItems}</i></span>
                    </div>
                </nav>
            </div>

            <div className='home-body'>
                <ul>
                    {tableMenu.map((each) => (
                        <li key={each.menu_category_id} onClick={() => (setActiveTab(each.menu_category), setActiveTabId(each.menu_category_id))} className={activeTabId === each.menu_category_id ? 'active' : 'not-active'}>
                            {each.menu_category}</li>
                    ))}
                </ul>

                {activeTab === undefined && soups?.map((each) => {
                    return (
                        <FoodItemCard key={each.dish_id} details={each} addToCart={addToCart} removeFromCart={removeFromCart} myOrders={myOrders}/>
                    )
                }
                )}
                {activeTab === 'Salads and Soup' && soups?.length > 0 ? soups.map((each) => {
                    return (
                        <FoodItemCard key={each.dish_id} details={each} addToCart={addToCart} removeFromCart={removeFromCart} myOrders={myOrders}/>
                    )
                }
                ) : null}

                {activeTab === 'From The Barnyard' && barnyard?.length > 0 ? barnyard?.map((each) => {
                    return (
                        <Barnyard key={each.dish_id} details={each} addToCart={addToCart} removeFromCart={removeFromCart} myOrders={myOrders} />
                    )
                }
                ) : null}
                {activeTab === 'From the Hen House' && fromHouse?.length > 0 ? fromHouse.map((each) => {
                    return (
                        <FromHouse key={each.dish_id} details={each} addToCart={addToCart} removeFromCart={removeFromCart} myOrders={myOrders} />
                    )
                }
                ) : null}
                {activeTab === 'Fresh From The Sea' && sea?.length > 0 ? sea.map((each) => {
                    return (
                        <Sea key={each.dish_id} details={each} addToCart={addToCart} removeFromCart={removeFromCart} myOrders={myOrders} />
                    )
                }
                ) : null}
                {activeTab === 'Biryani' && biryani?.length > 0 ? biryani.map((each) => {
                    return (
                        <Biryani key={each.dish_id} details={each} addToCart={addToCart} removeFromCart={removeFromCart} myOrders={myOrders} />
                    )
                }
                ) : null}
                {activeTab === 'Fast Food' && fastFood?.length > 0 ? fastFood.map((each) => {
                    return (
                        <FastFood key={each.dish_id} details={each} addToCart={addToCart} removeFromCart={removeFromCart} myOrders={myOrders} />
                    )
                }
                ) : null}
            </div>
            
        </div>

    )
}
export default Home