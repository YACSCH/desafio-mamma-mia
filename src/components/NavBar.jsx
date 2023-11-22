import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import { DataContext }from '../context/DataContext'

const NavBar = () => {

    const { totalAcum } = useContext(DataContext);

    return (
        <nav className="nav">
        <div className="nav-title">
          <Link  to="/home"><h2>🍕 Pizzería Mamma-Mia!!</h2></Link>
        </div>
        <div className="nav-cart">
          <Link  to="/carrito"><span>🛒 </span></Link>
          <h2>$ {totalAcum.toLocaleString("es-CL")}</h2></div>
      </nav>
    )
}

export default NavBar