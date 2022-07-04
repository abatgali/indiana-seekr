import Image from "next/image";
import logo from "../public/indiana_seekr_logo.png"
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/" className="">
                        <Image src={logo} width={40} height={40} alt="Logo of Indiana Seekr"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#six-routes">Tech-Jobs</Nav.Link>
                            <Nav.Link href="/learn">Learn</Nav.Link>
                            <Nav.Link href="/#news">News</Nav.Link>

                        </Nav>
                        <Nav>
                            <NavDropdown title="Hire in Indiana" id="collapsible-nav-dropdown" menuVariant="light">
                                <NavDropdown.Item href="#action/3.1">Interns</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Support</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Full-time</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Learn More</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey={2} href="#signin">
                                Hello, Seekr!
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};