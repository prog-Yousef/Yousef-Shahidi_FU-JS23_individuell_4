import React, { useEffect, useState } from "react";
import "../abstracts/Menu.scss";
import Nav from "../components/Nav";
import Cart from "../components/Cart";
import plus from "../logos/plus.png";

interface MenuItem {
  id: number;
  desc: string;
  price: number;
  title: string;
}

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/"
        );

        const data = await response.json();
        if (data.success) {
          setMenuItems(data.menu);
        } 
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item: MenuItem) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.title === item.title
    );
    if (existingCartItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 0) {
      updatedCartItems[index].quantity--;
    }
    setCartItems(updatedCartItems);
  };


  const increaseQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };


  return (
    <>
      <div className="wrapper-menu">
        <Nav />
        <Cart
          cartItems={cartItems}
          increase={increaseQuantity}
          decrease={decreaseQuantity}
        />
        <main>
          <div className="Menu_Head">Menu</div>
          {menuItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="product_content"
              onClick={() => addToCart(item)}
            >
              <img src={plus} alt=""/>
              <div className="product_name">
                <h1 className="product_title">{item.title}</h1>
                <p className="product_desc">{item.desc}</p>
              </div>
              <p className="item_price">{item.price} kr</p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Menu;
