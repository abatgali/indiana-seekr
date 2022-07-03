import Image from "next/image";
import logo from "../public/indiana_seekr_logo.png"
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <footer className="border-top p-5 d-flex justify-content-between" id="footer">
                <div>
                    <Image src={logo} height={100} width={100} alt="Indiana Seekr logo"/>
                    <div className="small"> <strong>Indiana Seekr </strong> </div>
                    <p>&copy; 2022</p>
                </div>
                <Form>
                    <h1 className="w-50">Opportunities in Indiana</h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Stay in the loop. We'll keep you updated.</p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="outline-primary">Subscribe</Button>

                </Form>
            </footer>
        </>
    )
};