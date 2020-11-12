import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default ({ categories }) => {
  // console.log("estas son las props: ", categories)
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

// export default () => (
//   <Container>
//     <Row>
//       <Col xs={6} md={3}>
//         <Image
//           src="https://images.unsplash.com/photo-1461784121038-f088ca1e7714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80/171x180"
//           fluid
//           roundedCircle
//         />
//       </Col>
//       <Col xs={6} md={3}>
//         <Image
//           src="https://images.unsplash.com/photo-1528553744039-c1dcef33574f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1344&q=80/171x180"
//           fluid
//           roundedCircle
//         />
//       </Col>
//       <Col xs={6} md={3}>
//         <Image
//           src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80/171x180"
//           fluid
//           roundedCircle
//         />
//       </Col>
//       <Col xs={6} md={3}>
//         <Image
//           src="https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80/171x180"
//           fluid
//           roundedCircle
//         />
//       </Col>
//     </Row>
//   </Container>
// );
