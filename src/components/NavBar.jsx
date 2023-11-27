import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

import Badge from "react-bootstrap/Badge";

const NavBar = () => {
  const { totalAcum, totalQuantity } = useContext(DataContext);

  return (
    <nav className="d-flex justify-content-around bg-info text-white p-3 shadow-lg">
      <div className="nav-title">
        <Link to="/home">
          <h2>🍕 Pizzería Mamma-Mia!!</h2>
        </Link>
      </div>
      <div className="d-flex gap-4 text-decoration-none">
        <Link to="/carrito" className="position-relative">
        {totalQuantity > 0 && (
        <Badge pill bg="dark" className="position-absolute top-0 start-100 translate-middle">
          {totalQuantity.toLocaleString("es-CL")}
        </Badge>
      )}
      <span className="text-white"> 🛒 </span>
        </Link>
        <h2>$ {totalAcum.toLocaleString("es-CL")}</h2>
      </div>
    </nav>
  );
};

export default NavBar;
