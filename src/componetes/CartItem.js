import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCirclePlus,faCircleMinus, faTrash} from "@fortawesome/free-solid-svg-icons";

import '../styles/cartItem.css';


class CartItem extends React.Component {
  

   render() {
      //destructuring of state
      const {price, title, qty, img} = this.props.item;
      const {increaseQty, decreaseQty, deleteItem, item} = this.props;
      return (
         <main className="cart-item">
            <div className="left-block">
               <img src={img} alt=""/>
            </div>
            <div className="right-block">
               <span className="title"> {title} </span>
               <span className="price">Rs: {price} </span>
               <div className="cart-item-buttons">
                  <div className="increse-decrease-buttons">
                     <FontAwesomeIcon onClick={() => decreaseQty(item)} icon={faCircleMinus}></FontAwesomeIcon>
                     <span>{qty} </span>
                     <FontAwesomeIcon onClick={() => increaseQty(item)} icon={faCirclePlus}></FontAwesomeIcon>
                  </div>
                  <FontAwesomeIcon onClick={() => deleteItem(item.id)} icon={faTrash}></FontAwesomeIcon>
               </div>
            </div>
         </main>
      );
   }
}
export default CartItem;