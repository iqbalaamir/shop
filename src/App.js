import React, { useState } from "react";
import './App.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';
import { productsData } from './components/Product/productdata'
import { Container, Row } from 'react-bootstrap';



function App() {
  const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
  setCartItems([...cartItems, product]);
};

const removeFromCart = (product) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
  setCartItems(updatedCartItems);
};
  return (
    <div className='App'>
      <Navbar cartItems={cartItems}/>
      <Hero/>
      <Container>
      <div className="row">
        {productsData.map((product)=> (
            <div className="col-md-3 mb-3" key={product.id}>
              <Product product={product} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} cartItems={cartItems} />
            </div>
          ))}
      </div>
      </Container>
    </div>
  );
}

export default App;
