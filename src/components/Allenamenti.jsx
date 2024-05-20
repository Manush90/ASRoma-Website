import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const images = [
  {
    src: "https://media.asroma.com/prod/images/large_portrait_fill/bf5d1df09bdb-eva6819.jpg",
    alt: "Image 1",
  },
  {
    src: "https://media.asroma.com/prod/images/large_portrait_fill/a4af50a94541-eva7008.jpg",
    alt: "Image 2",
  },
  {
    src: "https://media.asroma.com/prod/images/landscape_gallery_fill/282b762d29cc-eva6709.jpg",
    alt: "Image 3",
  },
  {
    src: "https://media.asroma.com/prod/images/landscape_gallery_fill/c3cf5d2f77b5-eva6722.jpg",
    alt: "Image 4",
  },
  {
    src: "https://media.asroma.com/prod/images/landscape_gallery_fill/a1d56b91750b-eva6954.jpg",
    alt: "Image 5",
  },
  {
    src: "https://media.asroma.com/prod/images/landscape_gallery_fill/c29b56e55b5c-eva7107.jpg",
    alt: "Image 6",
  },
  {
    src: "https://media.asroma.com/prod/images/landscape_gallery_fill/e5c074bdad61-eva6797.jpg",
    alt: "Image 7",
  },
  {
    src: "https://media.asroma.com/prod/images/landscape_gallery_fill/a8087cfefb3d-eva7538.jpg",
    alt: "Image 8",
  },
];

const ImageGallery = () => {
  return (
    <Container className="mt-3">
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={3} xl={3}>
            <Image src={image.src} alt={image.alt} className="imgTraining" fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageGallery;
