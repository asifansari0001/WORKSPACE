import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import women_laptop from "../assets/woman_laptop.jpg";
import work_top from "../assets/client_home.jpg";
import jack from "../assets/jack.jpg";
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

function FluidExample() {
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
    style={{ maxHeight: "500px" }}
  />
  <div className="carousel-container position-absolute top-50 start-50 translate-middle text-center mt-4 p-3 w-100">
    <Carousel
      indicators={false}
      nextIcon={
        <span aria-hidden="true" className="carousel-control-next-icon" />
      }
      prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />
      }
    >
      <Carousel.Item>
        <div className="d-flex flex-wrap justify-content-around">
          <Card className="text-center bg-transparent border-0 mt-5 mx-2">
            <Card.Img
              className="mt-3"
              variant="top"
              src={jack}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "auto",
              }}
            />
            <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
              <Card.Title className="text-white fw-bold">BB COOPER</Card.Title>
              <Card.Text className="text-dark fw-bold mb-1">
                Hourly Rate : <span className="text-dark">₹3000</span>
              </Card.Text>
              <Card.Text className="fw-light text-dark mt-1">
                Freelance web developer with over 5 years of experience in
                building responsive websites
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center bg-transparent border-0 mt-5 mx-2">
            <Card.Img
              className="mt-3"
              variant="top"
              src={jack}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "auto",
              }}
            />
            <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
              <Card.Title className="text-white fw-bold">BB COOPER</Card.Title>
              <Card.Text className="text-dark fw-bold mb-1">
                Hourly Rate : <span className="text-dark">₹3000</span>
              </Card.Text>
              <Card.Text className="fw-light text-dark mt-1">
                Freelance web developer with over 5 years of experience in
                building responsive websites
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center bg-transparent border-0 mt-5 mx-2">
            <Card.Img
              className="mt-3"
              variant="top"
              src={jack}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "auto",
              }}
            />
            <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
              <Card.Title className="text-white fw-bold">BB COOPER</Card.Title>
              <Card.Text className="text-dark fw-bold mb-1">
                Hourly Rate : <span className="text-dark">₹3000</span>
              </Card.Text>
              <Card.Text className="fw-light text-dark mt-1">
                Freelance web developer with over 5 years of experience in
                building responsive websites
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex flex-wrap justify-content-around">
          <Card className="text-center bg-transparent border-0 mt-5 mx-2">
            <Card.Img
              className="mt-3"
              variant="top"
              src={john}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "auto",
              }}
            />
            <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
              <Card.Title className="text-white fw-bold">JOHN HECTOR</Card.Title>
              <Card.Text className="text-dark fw-bold mb-1">
                Hourly Rate : <span className="text-dark">₹5000</span>
              </Card.Text>
              <Card.Text className="fw-light text-dark mt-1">
                Freelance Flutter developer with over 8 years of experience in
                building Mobile Apps
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center bg-transparent border-0 mt-5 mx-2">
            <Card.Img
              className="mt-3"
              variant="top"
              src={john}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "auto",
              }}
            />
            <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
              <Card.Title className="text-white fw-bold">JOHN HECTOR</Card.Title>
              <Card.Text className="text-dark fw-bold mb-1">
                Hourly Rate : <span className="text-dark">₹5000</span>
              </Card.Text>
              <Card.Text className="fw-light text-dark mt-1">
                Freelance Flutter developer with over 8 years of experience in
                building Mobile Apps
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center bg-transparent border-0 mt-5 mx-2">
            <Card.Img
              className="mt-3"
              variant="top"
              src={john}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "auto",
              }}
            />
            <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
              <Card.Title className="text-white fw-bold">JOHN HECTOR</Card.Title>
              <Card.Text className="text-dark fw-bold mb-1">
                Hourly Rate : <span className="text-dark">₹5000</span>
              </Card.Text>
              <Card.Text className="fw-light text-dark mt-1">
                Freelance Flutter developer with over 8 years of experience in
                building Mobile Apps
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
  <div className="freelancer-text position-absolute top-0 start-50 translate-middle-x text-center mt-1 p-3">
    <h1 className="text-white fw-bold">MOST VIEWED FREELANCERS</h1>
    <h6 className="text-white fw-light">
      Most viewed freelancers are top-rated for their skills, reviews, and
      successful projects, making them easy for clients to find and hire.
    </h6>
  </div>
</div>

      <br />
      <br />

      <div className="position-relative">
        <Image
          src={green}
          className="d-block w-100"
          style={{ maxHeight: "500px" }}
        />
        <div className="carousel-container position-absolute top-50 start-50 translate-middle text-center mt-4 p-3 w-100">
          <Carousel
            indicators={false}
            nextIcon={
              <span aria-hidden="true" className="carousel-control-next-icon" />
            }
            prevIcon={
              <span aria-hidden="true" className="carousel-control-prev-icon" />
            }
          >
            <Carousel.Item>
              <div className="d-flex justify-content-around">
                <Card className="text-center bg-transparent border-0 mt-5">
                  <Card.Img
                    className="mt-3"
                    variant="top"
                    src={christopher}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      margin: "auto",
                    }}
                  />
                  <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
                    <Card.Title className="text-white fw-bold">
                      CHRISTOPHER JOHN
                    </Card.Title>
                    <Card.Text className="text-dark fw-bold mb-1">
                      PAY : <span className="text-dark">₹25000</span>
                    </Card.Text>
                    <Card.Text className="text-dark fw-bold mb-1">
                      Time Limit : <span className="text-dark">3 Days</span>
                    </Card.Text>

                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="fw-light text-dark mt-1"
                    >
                      Create a Travel Website with Django and React and Submit
                      before the Time Limit
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="text-center bg-transparent border-0 mt-5">
                  <Card.Img
                    className="mt-3"
                    variant="top"
                    src={christopher}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      margin: "auto",
                    }}
                  />
                  <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
                    <Card.Title className="text-white fw-bold">
                      CHRISTOPHER JOHN
                    </Card.Title>
                    <Card.Text className="text-dark fw-bold mb-1">
                      PAY : <span className="text-dark">₹25000</span>
                    </Card.Text>
                    <Card.Text className="text-dark fw-bold mb-1">
                      Time Limit : <span className="text-dark">3 Days</span>
                    </Card.Text>

                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="fw-light text-dark mt-1"
                    >
                      Create a Travel Website with Django and React and Submit
                      before the Time Limit
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="text-center bg-transparent border-0 mt-5">
                  <Card.Img
                    className="mt-3"
                    variant="top"
                    src={christopher}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      margin: "auto",
                    }}
                  />
                  <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
                    <Card.Title className="text-white fw-bold">
                      CHRISTOPHER JOHN
                    </Card.Title>
                    <Card.Text className="text-dark fw-bold mb-1">
                      PAY : <span className="text-dark">₹25000</span>
                    </Card.Text>
                    <Card.Text className="text-dark fw-bold mb-1">
                      Time Limit : <span className="text-dark">3 Days</span>
                    </Card.Text>

                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="fw-light text-dark mt-1"
                    >
                      Create a Travel Website with Django and React and Submit
                      before the Time Limit
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
                <Card className="text-center bg-transparent border-0 mt-5">
                  <Card.Img
                    className="mt-3"
                    variant="top"
                    src={issac}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      margin: "auto",
                    }}
                  />
                  <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
                    <Card.Title className="text-white fw-bold">
                      ISSAC BROWN
                    </Card.Title>
                    <Card.Text className="text-dark fw-bold mb-1">
                      PAY : <span className="text-dark">₹45000</span>
                    </Card.Text>
                    <Card.Text className="text-dark fw-bold mb-1">
                      Time Limit : <span className="text-dark">5 Days</span>
                    </Card.Text>

                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="fw-light text-dark mt-1"
                    >
                      Create a Freelancers App with Flutter and Fire Base and
                      Submit before the Time Limit
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="text-center bg-transparent border-0 mt-5">
                  <Card.Img
                    className="mt-3"
                    variant="top"
                    src={issac}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      margin: "auto",
                    }}
                  />
                  <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
                    <Card.Title className="text-white fw-bold">
                      ISSAC BROWN
                    </Card.Title>
                    <Card.Text className="text-dark fw-bold mb-1">
                      PAY : <span className="text-dark">₹45000</span>
                    </Card.Text>
                    <Card.Text className="text-dark fw-bold mb-1">
                      Time Limit : <span className="text-dark">5 Days</span>
                    </Card.Text>

                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="fw-light text-dark mt-1"
                    >
                      Create a Freelancers App with Flutter and Fire Base and
                      Submit before the Time Limit
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="text-center bg-transparent border-0 mt-5">
                  <Card.Img
                    className="mt-3"
                    variant="top"
                    src={issac}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      margin: "auto",
                    }}
                  />
                  <Card.Body style={{ maxHeight: "300px", maxWidth: "400px" }}>
                    <Card.Title className="text-white fw-bold">
                      ISSAC BROWN
                    </Card.Title>
                    <Card.Text className="text-dark fw-bold mb-1">
                      PAY : <span className="text-dark">₹45000</span>
                    </Card.Text>
                    <Card.Text className="text-dark fw-bold mb-1">
                      Time Limit : <span className="text-dark">5 Days</span>
                    </Card.Text>

                    <Card.Text
                      style={{ color: "whitesmoke" }}
                      className="fw-light text-dark mt-1"
                    >
                      Create a Freelancers App with Flutter and Fire Base and
                      Submit before the Time Limit
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="freelancer-text position-absolute top-0 start-50 translate-middle-x text-center mt-1 p-3">
          <h1 className="text-white fw-bold">POPULAR CLIENTS</h1>
          <h6 className="text-white fw-light ">
            Popular clients on workspace post often, are clear, reliable, and
            timely with payments
          </h6>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-around my-5 line-container">
  <div className="d-flex flex-column align-items-center mx-2 mb-4">
    <Image src={Pencil} style={{ borderRadius: '50px' }} height={100} width={100} />
    <h3 className="my-2 fw-bold">
      <CountUp start={0} end={12} duration={3} />M
    </h3>
    <h3 className="text-secondary">Projects</h3>
  </div>

  <div className="d-flex flex-column align-items-center mx-2 mb-4">
    <Image src={Profile} style={{ borderRadius: '50px' }} height={100} width={100} />
    <h3 className="my-2 fw-bold">
      <CountUp start={0} end={8} duration={3} />M
    </h3>
    <h3 className="text-secondary">Users</h3>
  </div>

  <div className="d-flex flex-column align-items-center mx-2 mb-4">
    <Image src={todo} style={{ borderRadius: '50px' }} height={100} width={100} />
    <h3 className="my-2 fw-bold">
      <CountUp start={0} end={6} duration={3} />M
    </h3>
    <h3 className="text-secondary">Proposals</h3>
  </div>

  <div className="d-flex flex-column align-items-center mx-2 mb-4">
    <Image src={feedback} style={{ borderRadius: '50px' }} height={100} width={100} />
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
