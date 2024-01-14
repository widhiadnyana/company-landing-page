import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([
    {
      id: 1,
      image: require("../assets/images/img-hero1.jpg"),
      title: "The perfect design for your website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
      link: "https://www.google.com",
    },
    {
      id: 2,
      image: require("../assets/images/img-hero2.jpg"),
      title: "Start Your Future Financial Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
      link: "https://www.facebook.com",
    },
    {
      id: 3,
      image: require("../assets/images/img-hero3.jpg"),
      title: "Enjoy the Difference",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
      link: "https://www.twitter.com",
    },
  ]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="home" className="hero-block">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {carouselData.length > 0 &&
          carouselData.map((data, idx) => {
            return (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={data.image}
                  alt={"slide " + data.id}
                />
                <Carousel.Caption>
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                  <a className="btn btn-primary" href={data.link}>
                    Learn More <i class="fas fa-chevron-right"></i>
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </section>
  );
};

export default HomeCarousel;
