import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    cartList.find((prod) => {
      prod.id === id;
    });
  };
  const addToCart = (item, qty) => {
    if (isInCart(item.id)) {
      const newCart = cartList.map((prod) => {
        if (prod.id === item.id) {
          const newQty = prod.qty + qty;
          return { ...prod, qty: newQty };
        } else {
          return prod;
        }
      });
      setCartList(newCart);
    } else {
      const newProduct = { ...item, qty: qty };
      setCartList([...cartList, newProduct]);
    }
  };
  const removeList = () => setCartList([]);

  const totalPrice = () => {
    return cartList.reduce(
      (total, elem) => (total += elem.price * elem.qty),
      0
    );
  };

  const deleteItem = (id) => {
    setCartList(
      cartList.filter((prod) => {
        prod.id != id;
      })
    );
  };

  const cleanCart = () => {
    setCartList([]);
  };

  const totalQuantity = () => {
    return cartList.reduce((acc, product) => (acc += product.qty), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeList,
        deleteItem,
        totalPrice,
        cleanCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
