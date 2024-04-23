import { useState } from "react";
import { Carousel } from "react-bootstrap";

function Carosello() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container  mt-2">
      <div className="row justify-content-center ">
        <div className="col-12 col-md-12">
          <Carousel className="shadow" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className="carousel-image">
                <img
                  src="https://www.ilromanista.eu/writable/uploads/GettyImages-1483671976.jpg"
                  alt="Logo"
                  className="d-block w-100 cover-image"
                  height="500px"
                />
              </div>
              <Carousel.Caption>
                <h1>Sold Out !</h1>
                <p>Tutto esaurito per l'ottavo di Europa League</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image ">
                <img
                  src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2024/03/07/3924669-79726148-2560-1440.jpg"
                  alt="Logo"
                  className="d-block w-100 cover-image"
                  height="500px"
                />
              </div>
              <Carousel.Caption>
                <h1>Super Lukaku !</h1>
                <p>Guarda i due assist procurati a Dybala Nel match contro il Verona</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-image ">
                <img
                  src="https://static.sky.it/editorialimages/fc8ad75a799d05f63a38fdaf19098efbe7f1dad5/skysport/it/calcio/serie-a/partite/2022/giornata-18/roma-fiorentina/highlights/content/10_dybala_esultanza_roma_ipa.jpg"
                  alt="Logo"
                  className="d-block w-100 cover-image"
                  height="500px"
                />
              </div>
              <Carousel.Caption>
                <h1>La Joya!</h1>
                <p>Tripletta dell'argentino e 15° gol in campionato</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Carosello;
