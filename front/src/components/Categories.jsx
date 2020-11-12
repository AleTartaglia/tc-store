import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default ({ categories }) => {
  return (
    <div>
      <Container>
        <Row>
          {categories
            ? categories.map((category) => {
                return (
                  <Col xs={6} md={3} className="linkCategories">
                    <Link to={`/categories/${category.name}`} className="linkCategories">
                      <Image src={category.image} fluid roundedCircle className="imagenCategories" />
                      <h3>{category.name}</h3>
                    </Link>
                  </Col>
                );
              })
            : null}
        </Row>
      </Container>
    </div>
  );
};
