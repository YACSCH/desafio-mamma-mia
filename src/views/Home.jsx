import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { ToastContainer, toast } from 'react-toastify';

const Home = () => {

  const { loadPizza, addItemCart, upperLetter } = useContext(DataContext);

  const navigate = useNavigate();

  
  const addCart = (pizza) => {

    toast.success('🍕Pizza Agregada!!!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    addItemCart(pizza)

  }
  return (
    <>
      <div>
        <Header />

        <div className="container">
        <Row>
            {loadPizza.map((pizza) => (
              <Col md={3} key={pizza.id}>
                <Card className="card-home">
                  <Card.Img variant="top" src={pizza.img} />
                  <Card.Body>
                    <Card.Title>{upperLetter(pizza.name)} </Card.Title>
                    <hr />
                      Ingredientes:
                      <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                          <li key={index}>🍕 {upperLetter(ingredient)}</li>
                        ))}
                      </ul>
                  </Card.Body>
                  <Card.Footer className="bg-transparent">
                    <h2 className='text-center'>
                      $ {pizza.price.toLocaleString("es-CL")}
                    </h2>
                    <div className='d-flex justify-content-between gap-4'>
                      <Button
                        variant="info"
                        onClick={() => navigate(`/pizza/${pizza.id}`)}
                      >
                        Ver Mas 👀
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => addCart(pizza)}
                      >
                        Añadir 🛒
                      </Button>
                      
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              ))}
            </Row>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
