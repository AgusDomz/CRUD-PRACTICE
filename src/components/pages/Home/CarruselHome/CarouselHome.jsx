import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="cafe"
          />
          <Carousel.Caption>
            <h3>The best café!</h3>
            <p>Enjoy an unforgettable taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1501721358449-1505ca840822?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="croissant"
          />
          <Carousel.Caption>
            <h3>The best croissants and more here!</h3>
            <p>Enjoy an unforgettable taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/reserve/jCCsCae7RwCDOKTCA2Ji_reggeli%20-%20sonk%C3%A1s%20szendvics.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80"
            alt="mixed roasts"
          />
          <Carousel.Caption>
            <h3>The best mixed roasts and more!</h3>
            <p>Enjoy an unforgettable taste.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselHome