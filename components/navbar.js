import Image from "next/image";
import logo from "../public/indiana_seekr_logo.png"
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="">
                        <Image src={logo} width={30} height={30} alt="Logo of Indiana Seekr"/>{' '}
                        Indiana Seekr
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Tech-Jobs</Nav.Link>
                            <Nav.Link href="#pricing">News</Nav.Link>
                            <NavDropdown title="Hire" id="collapsible-nav-dropdown" menuVariant="dark">
                                <NavDropdown.Item href="#action/3.1">Interns</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Support</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Full-time</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Learn More</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Learning</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};