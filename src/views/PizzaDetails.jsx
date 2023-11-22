import React, { useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { DataContext } from "../context/DataContext";

const PizzaDetails = () => {
  const { loadPizza, addCart } = useContext(DataContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const upperLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const selectPizza = loadPizza.find((p) => p.id === id);

  return (
    <Container className="mt-3">
      <Row className="d-flex"   >
        <Col xs={12} md={6} className="p-0 h-100">
          <Card>
            <Card.Img
              variant="top"
              src={selectPizza.img}
              alt={selectPizza.desc}
              className="card-img-detail"
              
            />
          </Card>
        </Col>
        <Col xs={12} md={6} className="p-0">
          <Card className="h-100">
            <Card.Body className="h-100">
              <Card.Title>{upperLetter(selectPizza.name)}</Card.Title>
              <hr />
              
                <p>{selectPizza.desc}</p>
                Ingredientes:
                <ul>
                  {selectPizza.ingredients.map((ingredient, index) => (
                    <li key={index}>🍕 {upperLetter(ingredient)}</li>
                  ))}
                </ul>
                <hr />
                <div className="card-buttons-detail">
                  <h2 >
                    Precio $ {selectPizza.price.toLocaleString("es-CL")}
                  </h2>
                  <Button  variant="danger" onClick={() => addCart(selectPizza)}>
                    Añadir 🛒
                  </Button>
                </div>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button variant="success" className='mt-4' onClick={() => navigate(`/home`)}> ◀︎ Volver</Button>
    </Container>
  );
};

export default PizzaDetails;
