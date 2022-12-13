import React from "react";
import Navbar from "./Navbar";
import CartList from "./CartList";
import Footer from "./Footer";
import '../styles/app.css'
import firebase from "firebase/app";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
       products:[],
       loading:true,
    }
    this.db = firebase.firestore();
  }

  //fetching data from firebase
  // componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection('products')
  //     .get()
  //     .then((snapshot) => {
  //       const products = snapshot.docs.map((doc) => {
  //         const data = doc.data();
  //         data['id'] = doc.id;
  //         return data;
  //       });
  //       this.setState({products, loading:false});
  //     });
  // }

  componentDidMount() {
    this.db.collection('products').onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      this.setState({
        products:products,
        loading:false
      })
    })
  }
  // adding product in database
  addProduct = () => {
    this.db.collection('products').add({
      img:"",
      price:900,
      qty:3,
      title:"pen"
    })
    .then((docRef) => { console.log(docRef);})
    .catch((error) => {console.log(error);})
  }

  // update product in database
  increaseQty = (item) => {
    const docRef = this.db.collection('products').doc(item.id);
    docRef.update({
      qty:item.qty +1
    })
    .then(()=> {console.log("increase successfully");})
    .catch((error) => {console.log(error);})
  }

  decreaseQty = (item) => {
    if(item.qty <= 0) return;
    const docRef = this.db.collection('products').doc(item.id);
    console.log(docRef);
    docRef.update({qty: item.qty -1})
    .then(()=> {console.log('decrease successfully')})
    .catch((err) => {console.log(err)})
  }

  // delete item form cart
  deleteItem = (id) => {
    const docRef = this.db.collection('products').doc(id);
    docRef.delete()
    .then(() => {console.log("delete successfully")})
    .catch((err) => {console.log(err)})
  }

  // //handle increase qty event
  // increaseQty = (item) => {
  //   const {products} = this.state;
  //   const itemIndex = products.indexOf(item);
  //   products[itemIndex].qty += 1;

  //   this.setState({products});
  // }

  // //handle decrease qty event
  // decreaseQty = (item) => {
  //   const {products} = this.state;
  //   const itemIndex = products.indexOf(item);
  //   const qty = products[itemIndex].qty;
  //   if( qty <= 0 ) return;
  //   products[itemIndex].qty -= 1;
  //   this.setState({products})
  // }

  // //handle delete item event
  // deleteItem = (id) => {
  //   let {products} = this.state;
  //   products = products.filter((ele) => ele.id !== id);
  //   this.setState({products});
  // }

  // count carted item 
  getCount = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((ele) => {
      count += ele.qty;
    })
    return count;
  }

  // calculate total price
  cartValue = () => {
    const {products} = this.state;
    return products.map((ele) => ele.price * ele.qty).reduce((sum, totalSum) => {return sum + totalSum}, 0 );
  }

  render() {
    const {products} = this.state;
    console.log(products);
    return (
      <div className="App">
          <button onClick={this.addProduct}>Add product</button>
          <Navbar count={this.getCount()} />
          <CartList 
            products={products} 
            decreaseQty={this.decreaseQty}
            increaseQty={this.increaseQty}
            deleteItem={this.deleteItem}
          />
          <Footer value={this.cartValue()} />
      </div>
    )
  }

}

export default App;
