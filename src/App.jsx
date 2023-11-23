import {  Routes, Route } from "react-router-dom";

import  DataProvider  from "./context/DataContext";

import Navbar from "./components/NavBar";

import Carrito from "./views/Carrito";
import Home from "./views/Home";
import PizzaDetails from "./views/PizzaDetails";
import NotFound from "./views/NotFound";


import "./App.css";

function App() {

  return (
    <>
      <DataProvider>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetails />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
