import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { Container, Row, Col, Image, Alert } from "react-bootstrap";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(firestore, "Notizie", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          setError("Notizia non trovata");
        }
      } catch (err) {
        setError("Errore nel recupero della notizia");
      }
    };
    fetchArticle();
  }, [id]);

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!article) {
    return <div>Notizia in arrivo...</div>;
  }

  return (
    <Container>
      <Row className="justify-content-center ">
        <Col className="d-flex justify-content-center" xs={12} md={10} lg={8}>
          <Image src={article.image} fluid className="mt-3" />
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <h1 className="text-center customcolor" style={{ wordWrap: "break-word" }}>
            {article.title}
          </h1>
          <h5 className="text-center ">di {article.author}</h5>
          <h6 className="text-center customcolor">{article.date}</h6>
          <hr />
          <p style={{ wordWrap: "break-word" }}>{article.content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleDetail;
