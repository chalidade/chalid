import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

export default function nav() {
  return (
    <>
      <Navbar style={{ background: "#0086CF" }}>
        <Navbar.Brand href="#home">
          <Link href="/">
            <img src="/beranda/logo.svg" />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="text-light" href="#home">
            Tren
          </Nav.Link>
          <Nav.Link className="text-light" href="#features">
            Collection
          </Nav.Link>
          <Nav.Link className="text-light" href="#features">
            Explore
          </Nav.Link>
          <Nav.Link className="text-light" href="#pricing">
            About Us
          </Nav.Link>
        </Nav>
        <Form inline>
          <Link href="/billing">
            <img className="mr-4" src="/beranda/logo_cart.svg" />
          </Link>
          <Link href="/signin">
            <img className="mr-4" src="/beranda/logo_user.svg" />
          </Link>
        </Form>
      </Navbar>
    </>
  );
}
