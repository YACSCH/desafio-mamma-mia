import { createContext, useEffect, useState } from "react";

import { GetData } from "../api/getApi";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [loadPizza, setLoadPizza] = useState([]);
  const [cart, setCart] = useState([]);

  const [isloading, setIsLoading] = useState(false);

  const pizzaList = async () => {
    setIsLoading(true);
    const response = await GetData();
    setLoadPizza(response.data);

    setIsLoading(false);
  };

  useEffect(() => {
    pizzaList();
  }, []);

  const addItemCart = (item) => {
    
    const isItemInCart = cart.find((i) => i.id === item.id);

    if (isItemInCart) {
      setCart((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  function removeItemCart(id) {

    const itemIndex = cart.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      const updatedCarrito = [...cart];

      updatedCarrito[itemIndex].quantity--;
      
      if (updatedCarrito[itemIndex].quantity === 0) {
        updatedCarrito.splice(itemIndex, 1);
      }
      setCart(updatedCarrito);
    }
  }

  const totalAcum = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.quantity,
    0
  );

  const totalQuantity = cart.reduce(
    (total, pizza) => total + pizza.quantity,
    0
  );
  const upperLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };



  return (
    <DataContext.Provider
      value={{
        loadPizza,
        cart,
        setCart,
        totalAcum,
        isloading,
        addItemCart,
        removeItemCart,
        upperLetter,
        totalQuantity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
