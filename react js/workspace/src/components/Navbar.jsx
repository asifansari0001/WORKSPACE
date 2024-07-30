import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/workspace_white.png";
import './Navbar.css';

function CollapsibleExample() {

  const navigate = useNavigate();
  
  const handleBrowseJobsClick = () => {
    navigate('/jobpage');
  };




  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-transperant fixed-top" style={{ maxWidth: '1376px' }}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            height="48"
            width="120"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          <Nav className="ms-auto">
            <Nav.Link href="#features" className='text-white fw-bold'>HOME</Nav.Link>
            <NavDropdown className='color_white' title="SERVICES" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='text-white fw-bold'>FIND FREELANCER</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleBrowseJobsClick} className='text-white fw-bold'>BROWSE JOBS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-white fw-bold' href="#action/3.3">COMMUNITY</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='text-white fw-bold' href="#pricing">ABOUT US</Nav.Link>
            <Nav.Link className='text-white fw-bold' href="#pricing">CONTACT US</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <button style={{ fontSize: '0.9rem', border:'1px solid white'}} className='btn rounded-5 text-white'>DASHBOARD</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
