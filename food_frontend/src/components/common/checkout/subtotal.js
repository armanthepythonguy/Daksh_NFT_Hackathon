import React from 'react'
import "./checkout.css"

export default function Subtotal() {
  var price = localStorage.getItem("total_price")
  if (price) {
    return (
      <div className='subtotal'>Total({localStorage.getItem("total_items")})
        <h2>₹{localStorage.getItem("total_price")}</h2>
        <button className='btn'>Buy Now</button>
      </div>
    )
  }
  else{
    return (
      <div className='subtotal'>Total(0)
        <h2>₹{0}</h2>
      </div>
    )
  }
}
