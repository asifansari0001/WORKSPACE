import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import women_laptop from "../assets/woman_laptop.jpg";
import work_top from "../assets/client_home.jpg";

import shakehand from "../assets/shakehand.jpg";
import call_center from "../assets/call_center.jpg";
import security from "../assets/security.jpg";
import artisticblue from "../assets/artistic-blue.jpg";
import john from "../assets/john.jpg";
import green from "../assets/green.jpg";
import issac from "../assets/issac.jpg";
import christopher from "../assets/christopher.jpg";
import Pencil from "../assets/Pencil.png";
import feedback from "../assets/feedback.png";
import todo from "../assets/todo.png";
import Profile from "../assets/profile.png";
import "./Home.css";

import CountUp from "react-countup";

const cards = [
  {
    image: issac,
    title: "ISSAC LEE",
    description:
      "Freelance web developer with over 5 years of experience in  building responsive websites",
    review: "★★★★★",
  },
  {
    image: issac,
    title: "ISSAC LEE",
    description:
      "Freelance web developer with over 5 years of experience in  building responsive websites",
    review: "★★★★★",
  },
  {
    image: issac,
    title: "ISSAC LEE",
    description:
      "Freelance web developer with over 5 years of experience in  building responsive websites",
    review: "★★★★★",
  },
  {
    image: issac,
    title: "ISSAC LEE",
    description:
      "Freelance web developer with over 5 years of experience in  building responsive websites",
    review: "★★★★★",
  },
  {
    image: issac,
    title: "ISSAC LEE",
    description:
      "Freelance web developer with over 5 years of experience in  building responsive websites",
    review: "★★★★★",
  },
  {
    image: john,
    title: "JOHN J",
    description:
      "Freelance web developer with over 5 years of experience in  building responsive websites ",
    review: "★★★",
  },
  {
    image: john,
    title: "JOHN J",
    description:
      "Freelance web developer with over 5 years of experience in  building responsive websites ",
    review: "★★★",
  },
  {
    image: john,
    title: "JOHN J",
    description:
      "Freelance web developer with over 5 years of experience in  building responsive websites ",
    review: "★★★",
  },
];

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function FluidExample() {
  const cardChunks = chunkArray(cards, 4);
  return (
    <>
      <div className="position-relative">
        <Image
          src={work_top}
          className="d-block w-100"
          style={{ maxHeight: "700px" }}
        />
      </div>

      <div className="container-fluid mt-4">
        <h2 className="text-center fw-bold">BROWSE AND FIND</h2>
      </div>

      <div className="container-fluid p-0 mt-4" style={{ overflow: "hidden" }}>
        <div className="row no-gutters">
          <div
            className="col-12 position-relative"
            style={{ width: "fit-content" }}
          >
            <img src={women_laptop} className="img-fluid" alt="Background" />
            <div className="overlay-text col-6 justify-content-md-start">
              THE EASIEST WAY TO GET THE JOB DONE
            </div>
            <p className="overlay-text2 col-6 justify-content-md-start">
              Work with talented people at the most affordable price to get the
              most out of your time and cost Our platform
            </p>
            <p className="overlay-text3 col-6 justify-content-md-start">
              connects you with experts in various fields, ensuring quality and
              efficiency in all your projects. Join us now!
            </p>

            <div className="search-bar-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
              <select className="search-type" defaultValue="placeholder">
                <option value="placeholder" disabled>
                  Service Type
                </option>
                <option value="people">Clients</option>
                <option value="projects">Freelancers</option>
              </select>
              <button className="search-button">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center mt-5 mb-md-5">
            <Card
              className="bg-light"
              style={{ width: "18.5rem", border: "none" }}
            >
              <Card.Img
                className="d-block mx-auto"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                variant="top"
                src={shakehand}
              />
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  Trustworthy Transactions
                </Card.Title>
                <Card.Text className="fw-light text-center">
                  workspace connects freelancers and clients, ensuring
                  trustworthy, reliable transactions
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 d-flex justify-content-center mt-5 mb-md-5">
            <Card
              className="bg-light"
              style={{ width: "18.5rem", border: "none" }}
            >
              <Card.Img
                className="d-block mx-auto"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                variant="top"
                src={security}
              />
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  Data Secured
                </Card.Title>
                <Card.Text className="fw-light text-center">
                  workspace ensures data security, safeguarding client and
                  freelancer information
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 d-flex justify-content-center mt-5 mb-md-5">
            <Card
              className="bg-light"
              style={{ width: "18.5rem", border: "none" }}
            >
              <Card.Img
                className="d-block mx-auto"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                variant="top"
                src={call_center}
              />
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  24 Hours Support
                </Card.Title>
                <Card.Text className="fw-light text-center">
                  offers 24/7 support, ensuring continuous assistance and
                  reliability
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="position-relative">
        <Image
          src={artisticblue}
          className="d-block w-100"
          style={{ maxHeight: "600px" }}
        />

        <Carousel
          className="position-absolute mt-5 top-50 start-50 translate-middle"
          style={{ width: "94%", zIndex: 3 }}
        >
          {cardChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {chunk.map((card, i) => (
                  <Card
                    key={i}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "20rem",
                      maxHeight: "20rem",
                      margin: "0 1rem",
                      display: "flex",
                      flexDirection: "column",
                      flex: "1 1 auto",
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                    
                        objectFit: "cover",
                      }}
                      src={card.image}
                    />
                    <Card.Body
                      className="d-flex flex-column"
                      style={{ flex: 1 }}
                    >
                      <Card.Title className="mt-3 d-flex justify-content-between align-items-center ms-2 freelancer_font1">
                        <span>{card.title}</span>
                        <span className="text-warning me-2 freelancer_font1">
                          {card.review}
                        </span>
                      </Card.Title>
                      <Card.Text
                        className="w-100 fw-lighter freelancer_font2"
                        style={{ flexGrow: 1, margin: 0, padding: "0.5rem" }}
                      >
                        {card.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="position-absolute top-0 start-50 translate-middle-x text-center mt-3 p-3">
          <h1 className="text-white fw-bold freelancer_text1">
            MOST VIEWED FREELANCERS
          </h1>
          <h6 className="text-white fw-light freelancer_text2">
            Most viewed freelancers are top-rated for their skills, reviews, and
            successful projects
          </h6>
        </div>
      </div>

      <br />
      <br />

      <div className="position-relative">
        <Image
          src={green}
          className="d-block w-100"
          style={{ maxHeight: "560px" }}
        />

        <Carousel
          className="position-absolute mt-5 top-50 start-50 translate-middle"
          style={{ width: "94%", zIndex: 3 }}
        >
          {cardChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {chunk.map((card, i) => (
                  <Card
                    key={i}
                    style={{
                      width: "20rem",
                      height: "auto",
                      margin: "0 1rem",
                      maxWidth: "20rem",
                      maxHeight: "20rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={card.image}
                    />
                    <Card.Body
                      className="d-flex flex-column"
                      style={{ flex: 1 }}
                    >
                      <Card.Title className="mt-3 d-flex justify-content-between align-items-center ms-2 freelancer_font1">
                        <span>{card.title}</span>
                        <span className="text-warning me-2 freelancer_font1">
                          {card.review}
                        </span>
                      </Card.Title>
                      <Card.Text
                        className="w-100 fw-lighter freelancer_font2"
                        style={{ flexGrow: 1, margin: 0, padding: "0.5rem" }}
                      >
                        {card.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="freelancer-text position-absolute top-0 start-50 translate-middle-x text-center mt-1 p-3">
          <h1 className="text-white fw-bold freelancer_text1">
            POPULAR CLIENTS
          </h1>
          <h6 className="text-white fw-light freelancer_text2">
            Popular clients on workspace post often, are clear, reliable, and
            timely with payments
          </h6>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-around my-5 line-container">
        <div className="d-flex flex-column align-items-center mx-2 mb-4">
          <Image
            src={Pencil}
            style={{ borderRadius: "50px" }}
            height={100}
            width={100}
          />
          <h3 className="my-2 fw-bold">
            <CountUp start={0} end={12} duration={3} />M
          </h3>
          <h3 className="text-secondary">Projects</h3>
        </div>

        <div className="d-flex flex-column align-items-center mx-2 mb-4">
          <Image
            src={Profile}
            style={{ borderRadius: "50px" }}
            height={100}
            width={100}
          />
          <h3 className="my-2 fw-bold">
            <CountUp start={0} end={8} duration={3} />M
          </h3>
          <h3 className="text-secondary">Users</h3>
        </div>

        <div className="d-flex flex-column align-items-center mx-2 mb-4">
          <Image
            src={todo}
            style={{ borderRadius: "50px" }}
            height={100}
            width={100}
          />
          <h3 className="my-2 fw-bold">
            <CountUp start={0} end={6} duration={3} />M
          </h3>
          <h3 className="text-secondary">Proposals</h3>
        </div>

        <div className="d-flex flex-column align-items-center mx-2 mb-4">
          <Image
            src={feedback}
            style={{ borderRadius: "50px" }}
            height={100}
            width={100}
          />
          <h3 className="my-2 fw-bold">
            <CountUp start={0} end={5} duration={6} />M
          </h3>
          <h3 className="text-secondary">Reviews</h3>
        </div>
      </div>
    </>
  );
}

export default FluidExample;
