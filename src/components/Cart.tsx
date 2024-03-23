import React, { useState } from "react";
import bag from "../logos/cart.png";
import upp from "../logos/toggleupp.png";
import ner from "../logos/togglener.png";
import "../abstracts/Cart.scss";
import Button from "./button";
interface CartProps {
  cartItems: CartItem[];
  increase: (index: number) => void;
  decrease: (index: number) => void;
}

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  
}


const Cart: React.FC<CartProps> = ({cartItems,increase,decrease,}) => {
  
  const [openCart, setOpenCart] = useState(false);

  const handlebuttonClick = () => {
    setOpenCart(!openCart);
  };

  const Total = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className={`cart_menu ${openCart ? "openC" : ""}`}>
      <div className="cart_container">
        <div className="logo_cart" onClick={handlebuttonClick}>
          <img  src={bag} alt="error" />
          <div className="logo_counter">
            <p className="product_counter">{totalItems}</p>
          </div>
        </div>
        {openCart && (
          <div className="cart_modal">
            <h1 className="cart_header_modal"><strong>Din beställning</strong></h1>
            <div className="order_cart_info">
              {cartItems.map((item: any, index: number) => (
                <div key={index} className="inside_cart_item">
                  <div>
                    <h1 className="header_bean_coffe">{item.title}</h1>
                    <p >{item.price} kr</p>
                  </div>
                  <div className="cart_toggle">
                    <img
                      src={upp}
                      alt="upp"
                      onClick={() => increase(index)}
                    />
                    <p >{item.quantity}</p>
                    <img
                      src={ner}
                      alt="ner"
                      onClick={() => decrease(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="total_cart_info">
              <h1 className="total_cart_modal">Total</h1>
              <p className="total_price_modal">{Total()} KR</p>
            </div>
            <p className="moms_modal">inkl moms + drönarleverans</p>
            <div>
              <Button cartItems={cartItems} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;