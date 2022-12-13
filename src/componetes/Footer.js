import React from "react";

import "../styles/footer.css";


class Footer extends React.Component {
   render() {
      const {value} = this.props;
      return(
         <footer>
            <span>Total Cart Value: {value} </span>
         </footer>
      );
   }
}
export default Footer;