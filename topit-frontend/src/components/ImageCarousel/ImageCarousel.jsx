import Carousel from 'react-bootstrap/Carousel';
import ImageCarouselItem from '../ImageCarouselItem/ImageCarouselItem';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Correct import path


function ImageCarousel({ imgSources }) {
  return (
    <Carousel>
      {imgSources.map((imgSource, index) => (
        <Carousel.Item key={index} interval={1000}>
          <ImageCarouselItem imageUrl={imgSource} />
          {/* <Carousel.Caption>
            <h3>{`Slide ${index + 1} label`}</h3>
            <p>Your caption here</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;

