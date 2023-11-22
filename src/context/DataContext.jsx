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

  const addCart = (item) => {
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
  
  const substractCart = () => {

  }



  const totalAcum = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.quantity,
    0
  );
  return (
    <DataContext.Provider
      value={{
        loadPizza,
        cart,
        setCart,
        totalAcum,
        isloading,
        addCart,
        substractCart
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
