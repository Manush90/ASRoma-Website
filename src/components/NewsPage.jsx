import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Nav, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { firestore } from "../firebase"; // Assicurati che il percorso sia corretto
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 7;

  useEffect(() => {
    const fetchNews = async () => {
      const newsCollection = collection(firestore, "Notizie");
      const newsQuery = query(newsCollection, orderBy("date", "desc"));
      const newsSnapshot = await getDocs(newsQuery);
      const newsList = newsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setNews(newsList);
    };
    fetchNews();
  }, []);

  // Calcola le notizie per la pagina corrente
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  // Funzione per cambiare pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container className="mt-0">
        <Row>
          <Col xs={12}>
            <div className="mt-2 p-0">
              <img
                className="d-block w-100 rounded heightcustom mb-2"
                src="/ragazzo_sciarpa_roma.jpg"
                alt="First slide"
              />
              <Card className="nohover height100">
                <Card.Body className="text-white bg-dark border rounded">
                  <Card.Title className="text-center">Ultime Notizie</Card.Title>
                  {currentNews.map((article) => (
                    <Nav.Link key={article.id} as={Link} to={`/Article/${article.id}`}>
                      <h6 className="m-0 ps-2">{article.date}</h6>
                      <p className="customcolor ps-2">{article.title}</p>
                      <h6 className="customFontp ps-2">{article.subtitle}</h6>
                      <hr />
                    </Nav.Link>
                  ))}
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-flex justify-content-center mt-3">
            <Pagination>
              {Array.from({ length: Math.ceil(news.length / newsPerPage) }, (_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
};

export default NewsPage;
