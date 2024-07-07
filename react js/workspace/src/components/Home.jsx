import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import women_laptop from "../assets/woman_laptop.jpg";
import work_top from "../assets/client_home.jpg";
import shakehand from "../assets/shakehand.jpg";
import call_center from "../assets/call_center.jpg";
import security from "../assets/security.jpg";
import artisticblue from "../assets/artistic-blue.jpg";
import "./Home.css";

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

      <div className="container-fluid bg-light mt-5">
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

      <div className="container-fluid p-0 mb-5 position-relative">
        <Image
          src={artisticblue}
          className="w-100"
          style={{ maxHeight: "700px", display: "block" }}
        />
        <div className="overlay-text position-absolute top-0 start-50 translate-middle-x text-center mt-5">
          <h1 className="text-white fw-bold">MOST VIEWED FREELANCERS</h1>
          <h6 className="text-white fw-light fs-5 mt-3">
            Most viewed freelancers are top-rated for their skills, reviews, and
            successful projects, making them easy for clients to find and hire.
          </h6>
        </div>
      </div>
    </>
  );
}

export default FluidExample;
