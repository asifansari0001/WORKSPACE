import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Form,Dropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import laptop from "../assets/laptop.jpg";
import "./Jobpage.css";

function WithHeaderExample() {
  const [price, setPrice] = useState(500);
  const [location, setLocation] = useState("Select Location");
  const [dateRange,setDateRange]=useState('Anytime')

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  const handleDateSelect=(selectedDateRange)=>{
    setDateRange(selectedDateRange);

  }

  return (
    <>
      <div className="image-header-container">
        <Image
          src={laptop}
          className="d-block w-100"
          style={{ maxHeight: "700px" }}
        />
        <div className="header-overlay">
          <h1 className="responsive-heading">PROJECTS</h1>
        </div>
      </div>

      <div className="main-content">
        <div className="sidebar">
          <div style={{ border: "1px solid grey" }} className="p-2">
            <h6 className="text-center">FILTER BY ATTRIBUTE</h6>
            <hr />

            <div>
              <h6 className="text-secondary">CATEGORY</h6>
              <Form>
                <Form.Check
                  type="switch"
                  id="android-switch"
                  label="Android Development"
                  name="category"
                />
                <Form.Check
                  type="switch"
                  id="django-switch"
                  label="Django Development"
                  name="category"
                />
                <Form.Check
                  type="switch"
                  id="react-switch"
                  label="React Development"
                  name="category"
                />
                <Form.Check
                  type="switch"
                  id="python-switch"
                  label="Python Development"
                  name="category"
                />
                <Form.Check
                  type="switch"
                  id="graphic-switch"
                  label="Graphic Design"
                  name="category"
                />
              </Form>
            </div>

            <div>
              <h6 className="text-secondary mt-3">Price</h6>
              <Form.Group controlId="price-range">
                <Form.Label>Price Range</Form.Label>
                <Form.Control
                  type="range"
                  min="0"
                  max="1000"
                  value={price}
                  onChange={handlePriceChange}
                  className="mb-1"
                />
                <Form.Text className="text-muted text-center">
                  Value: ₹{price}
                </Form.Text>
              </Form.Group>
            </div>

            <div className="mt-3">
              <h6 className="text-secondary">Seller Type</h6>
              <Form.Check
                type="switch"
                id="company-switch"
                label="Company"
              />
              <Form.Check
                type="switch"
                id="student-switch"
                label="Student"
              />
              <Form.Check
                type="switch"
                id="group-switch"
                label="Group"
              />
              <Form.Check
                type="switch"
                id="individual-switch"
                label="Individual"
              />
            </div>

            <div className="mt-3">
              <h6 className="text-secondary">Payment</h6>
              <Form.Check
                type="switch"
                id="basic-switch"
                label="Basic Level"
              />
              <Form.Check
                type="switch"
                id="moderate-switch"
                label="Moderate Level"
              />
              <Form.Check
                type="switch"
                id="expensive-switch"
                label="Expensive Level"
              />
            </div>

            <div className="Locations mt-3">
              <h6 className="text-secondary">Location</h6>
              <Dropdown>
                <Dropdown.Toggle variant="" style={{border:'1px solid grey'}} id="dropdown-basic">
                  {location}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleLocationSelect("Mumbai")}>
                    Mumbai
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLocationSelect(" Kerala")}>
                    Kerala
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLocationSelect("Delhi")}>
                    Delhi
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLocationSelect("Bangalore")}>
                    Bangalore
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLocationSelect(" Hydrabad")}>
                    Hydrabad
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="mt-3 mb-4">
              <h6 className="text-secondary">Date Posted</h6>
              <Dropdown>
                <Dropdown.Toggle variant="" style={{border:'1px solid grey'}} id="dropdown-date-range">
                  {dateRange}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleDateSelect("24 Hours")}>
                    24 Hours
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDateSelect("1 Week")}>
                    1 Week
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDateSelect("1 Month")}>
                    1 Month
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDateSelect("Anytime")}>
                    Anytime
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>



          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default WithHeaderExample;
