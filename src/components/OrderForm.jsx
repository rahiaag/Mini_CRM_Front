import React, { useState } from 'react';

const OrderForm = () => {
  const [customer, setCustomer] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const orderData = { customer, product, quantity };
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer:
        <input type="text" value={customer} onChange={(event) => setCustomer(event.target.value)} />
      </label>
      <br />
      <label>
        Product:
        <input type="text" value={product} onChange={(event) => setProduct(event.target.value)} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
      </label>
      <br />
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;