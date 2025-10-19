import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResultsAction } from "../redux/actions";
import { Navbar, Nav, Form, Button, InputGroup, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setSearchResultsAction(data));
      } else {
        alert("Error fetching search results");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar expand="md" className="flex-column bg-black text-light vh-100 position-fixed" style={{ width: "230px" }}>
      <Container className="d-flex flex-column p-3 h-100">
        <Navbar.Brand href="/">
          <img src={logo} alt="Spotify Logo" width="130" height="40" />
        </Navbar.Brand>

        <Nav className="flex-column mt-4">
          <Nav.Link href="#" className="d-flex align-items-center text-light mb-2">
            <i className="bi bi-house-door-fill me-2"></i> Home
          </Nav.Link>
          <Nav.Link href="#" className="d-flex align-items-center text-light mb-3">
            <i className="bi bi-book-fill me-2"></i> Your Library
          </Nav.Link>

          <Form onSubmit={handleSubmit} className="mb-3">
            <InputGroup>
              <Form.Control type="search" placeholder="Search artist" value={query} onChange={handleChange} />
              <Button type="submit" variant="outline-secondary">
                GO
              </Button>
            </InputGroup>
          </Form>
        </Nav>

        <div className="mt-auto">
          <Button variant="light" className="w-100 mb-2 text-dark">
            Sign Up
          </Button>
          <Button variant="dark" className="w-100 mb-2 text-light">
            Login
          </Button>
          <div className="text-light">
            <a href="#" className="text-decoration-none text-light">
              Cookie Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-decoration-none text-light">
              Privacy
            </a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
