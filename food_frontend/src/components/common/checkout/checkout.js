import React from "react"
import Subtotal from "./subtotal"
import Cartitems from "./cartitems"
import Header from "../header"
import "./checkout.css"

function Checkout() {
    var items = localStorage.getItem("cart")
    if (items){

        items = items.split(",").map(function(item) {
            if (item !== ""){
                return parseInt(item, 10);
            }
        });
        items = items.filter(function (){
            return true
        })
        console.log(items);
        return <>
        <Header />
        <div className="max-width">
            <div className="checkout">
                <div className="left">
                    <h2 className="Checkout-title">Checkout</h2>
                    <Cartitems items={items}/>
                </div>
                <div className="right">
                    <Subtotal/>
                </div>
            </div>
        </div>
    </>
    }
    else{
        return <>
        <Header />
        <div className="max-width">
            <div className="checkout">
                <div className="left">
                    <h2 className="Checkout-title">Checkout</h2>
                    {/* <Cartitems items={items}/> */}
                    <h1>Cart Is Empty Add items to cart</h1>

                </div>
                <div className="right">
                    <Subtotal/>

                </div>
            </div>
        </div>
    </>
    }
}

export default Checkout