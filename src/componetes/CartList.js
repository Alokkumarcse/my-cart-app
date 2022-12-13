import React from "react";
import CartItem from "./CartItem";

import '../styles/cartList.css';


class CartList extends React.Component {
  
   render() {
      const {products, increaseQty, decreaseQty, deleteItem} = this.props;
      return (
         <main className="cart-list">
            {
               products.map((ele) => {
                 return (
                  <CartItem 
                     item={ele} 
                     key={ele.id} 
                     increaseQty={increaseQty} 
                     decreaseQty={decreaseQty} 
                     deleteItem={deleteItem} 
                  />)
               })
            }
         </main>
      );
   }
}

export default CartList;