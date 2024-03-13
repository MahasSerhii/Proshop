import React from "react";
import Loader from "./Loader";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import { Carousel, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  const { data: products, error } = useGetTopProductsQuery();

  return error ? (
    <Message variant="danger">{error} </Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <Link to={`/product/${product._id}`}>
            <Row>
              <Col>
                <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <p style={{ color: "white" }}>{product.description} </p>
              </Col>
            </Row>

            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name}(${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
