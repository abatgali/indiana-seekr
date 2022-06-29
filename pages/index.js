import Layout from '../components/layout'
import {Carousel, Button, Stack, Container, Card} from "react-bootstrap";
import one from "../public/hero_home.jpeg"
import two from "../public/hero_home2.jpeg"
import three from "../public/AdobeStock_223874324.jpeg"
import four from "../public/AdobeStock_485881931.jpeg"
import trend_img from "../public/trend.jpeg"

import Image from "next/image";

export default function Home() {
  return (
      <>
        <section>
            <Carousel>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={two}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Learn & Empower <br/> Your Career in Tech</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Stack direction="horizontal" gap={3} className="justify-content-center mb-5">
                            <Button variant="danger" size="lg">Jobs in Tech</Button>
                            <Button variant="secondary" size="lg">Get Started</Button>
                        </Stack>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={one}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={three}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={four}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
        <section>
            <Container className="justify">
                <h2>Selected Pathways</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
            </Container>
            <section className="justify-content-center">
            <div className="row">
                    <div className="col">Junior Developer</div>
                    <div className="col">Business Analyst</div>
                    <div className="col">Product Owner</div>
                </div>
                <div className="row">
                    <div className="col">Software Developer</div>
                    <div className="col">Product Manager</div>
                    <div className="col">IT Support</div>
                </div>
            </section>
        </section>
          <Container>
              <blockquote>“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna” </blockquote>
              <p>Quoted by</p>
          </Container>
          <Container>
              <h3>How We Work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
          </Container>
          <Container>
              <h3>Latest News</h3>
              <Stack direction="horizontal" gap={4}>
                  {card("Trendy News", trend_img)}
                  {card("Trendy News", trend_img)}
                  {card("Trendy News", trend_img)}
              </Stack>
          </Container>
      </>
  )
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            <main>{page}</main>
        </Layout>
    )
};

function card(title, img) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}