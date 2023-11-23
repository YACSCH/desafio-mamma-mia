import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import { DataContext }from '../context/DataContext'

const NavBar = () => {

    const { totalAcum } = useContext(DataContext);

    return (
        <nav className='d-flex justify-content-around bg-info text-white p-2 shadow-lg'>
        <div className='nav-title'>
          <Link  to="/home"><h2>🍕 Pizzería Mamma-Mia!!</h2></Link>
        </div>
        <div className='d-flex gap-4 text-decoration-none'>
          <Link  to="/carrito"><span className='text-white'> 🛒 </span></Link>
          <h2>$ {totalAcum.toLocaleString("es-CL")}</h2></div>
      </nav>
    )
}

export default NavBar