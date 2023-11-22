import React, {useContext} from 'react'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



import { DataContext } from "../context/DataContext";

const Carrito = () => {

    const { cart, totalAcum, addCart, substractCart  } = useContext(DataContext);

  return (
    <>
     <div className='container'>
            
            <div className='mt-4'>
                <h2 className=''>Detalle del Pedido: </h2>

                {cart?.map((pizza, index) => (
                    <div className="" key={index}>
                        <Row  className="d-flex aling-items-bottom ">
                            <Col md={6}>
                            <img src={pizza.img} alt={pizza.name} className="w-25"></img>
                                <span className='pizza-carrito'>{ pizza.name }</span>
                            </Col>
                            <Col md={3}>
                            <h2>$ {(pizza.price * pizza.quantity).toLocaleString("es-CL")}</h2>
                            </Col>
                            <Col md={3}>
                                <div className="carrito-buttons">
                                    <Button variant="primary" onClick={() => substractCart()} >➖</Button>
                                    <span> { pizza.quantity } </span>
                                    <Button variant="danger" onClick={() => addCart(pizza)}>➕</Button>
                                </div>
                            </Col>
                            <hr />
                           
                        </Row>
                    </div>
                ))}
                        <h2>Total: $ {totalAcum.toLocaleString("es-CL")}</h2>
                        <Button variant="success"  >ir a Pagar</Button>
                    </div>
               

            
        </div>
    </>
  )
}

export default Carrito