import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaStar } from 'react-icons/fa';


const Product = ({ product, onAddToCart, onRemoveFromCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!addedToCart) {
      setAddedToCart(true);
      onAddToCart(product);
    } else {
      setAddedToCart(false);
      onRemoveFromCart(product);
    }
  };

  const createStarRating = (rating) => {
    let starRating = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starRating.push(<FaStar key={i} color="#ffc107" />);
      } else {
        starRating.push(<FaStar key={i} color="#e4e5e9" />);
      }
    }
    return starRating;
  };


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} alt={product.name}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <div>{createStarRating(product.rating)}</div>
        <Card.Text>{product.price}</Card.Text>
        <Button variant={addedToCart ? "danger" : "primary"} onClick={handleAddToCart}>
          {addedToCart ? "Remove from Cart" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
