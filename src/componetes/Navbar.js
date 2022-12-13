import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import '../styles/navbar.css';


class Navbar extends React.Component {
   render() {
      const {count} = this.props;
      return(
         <nav className="navbar">
            <div className="left-block">
               <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
               <span>Cart</span>
            </div>
            <div className="right-block">
               <FontAwesomeIcon icon={faCartShopping}> </FontAwesomeIcon>
               <div className="cart-item-count">{count} </div>
            </div>
            
         </nav>
      );
   }
}
export default Navbar;