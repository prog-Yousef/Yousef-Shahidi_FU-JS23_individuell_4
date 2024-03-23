import React from 'react';
import { BeanStoreData } from './Zustand';
import { Link } from 'react-router-dom';

interface ButtonProps {
  cartItems: { title: string; price: number; quantity: number }[];
}

const Button: React.FC<ButtonProps> = ({ cartItems }) => {
  const BeanStore = BeanStoreData();

  const CoffeData = async () => {
    try {
      const response = await fetch('https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          details: {
            order: cartItems.map(item => ({
              name: item.title,
              price: item.price,
            })),
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Bad');
      }

      const data = await response.json();
      console.log('Order placed successfully:', data);
      BeanStore.setbeanData(data);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <Link to="/status" className="cart_button" onClick={CoffeData}>
<p>Take my money</p>
   </Link>
  );
};

export default Button;