import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { DataContext } from "../context/DataContext";

const Home = () => {

  const { loadPizza, addCart } = useContext(DataContext);

  const navigate = useNavigate();

  const upperLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <>
      <div className="home">
        <Header />

        <div className="container">
          <Row className="home-row">
            {loadPizza.map((pizza) => (
              <Col md={3} key={pizza.id}>
                <Card className="card-home">
                  <Card.Img variant="top" src={pizza.img} />
                  <Card.Body>
                    <Card.Title>{upperLetter(pizza.name)} {pizza.id} </Card.Title>
                    <hr />
                    
                      Ingredientes:
                      <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                          <li key={index}>🍕 {upperLetter(ingredient)}</li>
                        ))}
                      </ul>
                   
                  </Card.Body>
                  <Card.Footer className="card-footer bg-transparent">
                    <h2 className="home-price">
                      $ {pizza.price.toLocaleString("es-CL")}
                    </h2>
                    <div className="home-button">
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
      </div>
    </>
  );
};

export default Home;
