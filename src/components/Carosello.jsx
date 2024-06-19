import React, { useEffect, useState } from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { firestore } from "../firebase";
import { collection, getDocs, query, orderBy, limit, doc, getDoc } from "firebase/firestore";

const Carosello = () => {
  const [news, setNews] = useState([]);
  const [carouselData, setCarouselData] = useState({});

  useEffect(() => {
    const fetchNews = async () => {
      const newsCollection = collection(firestore, "Notizie");
      const newsQuery = query(newsCollection, orderBy("date", "desc"), limit(5));
      const newsSnapshot = await getDocs(newsQuery);
      const newsList = newsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setNews(newsList);
    };

    const fetchCarouselData = async () => {
      const docRef = doc(firestore, "Carosello", "Slides");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCarouselData(docSnap.data());
      } else {
        console.error("No such document!");
      }
    };

    fetchNews();
    fetchCarouselData();
  }, []);

  return (
    <Container className="mt-0 carousel-container">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={9}>
          <div className="carousel-container">
            <Carousel>
              <Carousel.Item className="carousel-item">
                <Link to={carouselData.Slide1Link} className="carousel-item-link">
                  <img src={carouselData.Slide1} alt="First slide" />
                  <Carousel.Caption className="carousel-caption">
                    <h4 className="textcarouselimage">{carouselData.Slide1txt}</h4>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <Link to={carouselData.Slide2Link} className="carousel-item-link">
                  <img src={carouselData.Slide2} alt="Second slide" />
                  <Carousel.Caption className="carousel-caption">
                    <h4 className="textcarouselimage">{carouselData.Slide2txt}</h4>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <Link to={carouselData.Slide3Link} className="carousel-item-link">
                  <img src={carouselData.Slide3} alt="Third slide" />
                  <Carousel.Caption className="carousel-caption">
                    <h4 className="textcarouselimage">{carouselData.Slide3txt}</h4>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={3}>
          <div className="marginmobile text-center">
            <Card className="nohover height100">
              <Card.Body className="text-white bg-dark border rounded">
                <Card.Title className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-paper white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                  </svg>
                  Ultime Notizie
                </Card.Title>

                {news.map((article) => (
                  <React.Fragment key={article.id}>
                    <Nav.Link as={Link} to={`/Article/${article.id}`}>
                      <p className="customcolor">{article.title}</p>
                      <h6 className="customFontp">{article.subtitle}</h6>
                    </Nav.Link>
                    <hr />
                  </React.Fragment>
                ))}
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Carosello;
