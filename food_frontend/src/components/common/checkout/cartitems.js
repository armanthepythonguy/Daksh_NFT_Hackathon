import { restaurants } from "../../../data/restaurants";
import React from "react";
import Cartcard from "./cartcards";
import "./cartcard.css"

function Cartitems(props) { 
    var list = props.items
    localStorage.setItem("total_items", localStorage.cart.split(",").length)
    console.log(list)
    return (<div className="cardholder">
        {restaurants.map((restaurant, i) => (
            list.indexOf(restaurant?.info?.resId) != -1 ? <Cartcard addButton={false} restaurant={restaurant} i={i} /> : localStorage.setItem("total_items",Number(localStorage.getItem("total_items"))) ))}
    </div>
    )
}
export default Cartitems