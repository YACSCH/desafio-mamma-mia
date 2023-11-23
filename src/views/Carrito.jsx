import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { DataContext } from "../context/DataContext";

const Carrito = () => {
  const { cart, totalAcum, addItemCart, removeItemCart, upperLetter } =
    useContext(DataContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="mt-4">
          <h2>Detalle del Pedido: </h2>

          {cart && cart.length > 0 ? (
            <>
              {cart.map((pizza) => (
                <div key={pizza.id}>
                  <Row className="d-flex align-items-center mt-2">
                    <Col md={6}>
                      <img
                        src={pizza.img}
                        alt={pizza.name}
                        className="shadow-sm rounded w-25"
                      ></img>
                      <span> {upperLetter(pizza.name)} </span>
                    </Col>
                    <Col md={3}>
                      <h2 className="text-end text-info">
                        ${" "}
                        {(pizza.price * pizza.quantity).toLocaleString("es-CL")}
                      </h2>
                    </Col>
                    <Col md={3}>
                      <div>
                        <Button
                          className="shadow-sm bg-body-tertiary rounded"
                          variant="primary"
                          onClick={() => removeItemCart(pizza.id)}
                        >
                          ➖
                        </Button>
                        <span className="m-4"> {pizza.quantity} </span>
                        <Button
                         className="shadow-sm bg-body-tertiary rounded"
                          variant="danger"
                          onClick={() => addItemCart(pizza)}
                        >
                          ➕
                        </Button>
                      </div>
                    </Col>
                   
                  </Row> 
                  <hr />
                </div>
              ))}
              <div>
                <h2>Total: $ {totalAcum.toLocaleString("es-CL")}</h2>
                <div className="d-flex justify-content-between">
                  <Button variant="success">Ir a Pagar</Button>
                  <Button variant="warning" onClick={() => navigate(`/home`)}> ◀︎ Volver</Button>
                </div>
              </div>
            </>
          ) : (
            <div>
              <h2 className="text-center text-danger">
                No hay registros en el carrito.!!!!
              </h2>
              <Button
                variant="success"
                className="mt-4"
                onClick={() => navigate(`/home`)}
              >
                {" "}
                ◀︎ Volver
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Carrito;
