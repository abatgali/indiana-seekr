import Layout from '../components/layout'
import {Carousel, Button, Stack, Container, Card} from "react-bootstrap";
import one from "../public/hero_home.jpeg"
import two from "../public/hero_home2.jpeg"
import three from "../public/AdobeStock_223874324.jpeg"
import four from "../public/AdobeStock_485881931.jpeg"
import trend_img from "../public/trend.jpeg"
import {Paper} from "@mui/material";
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
                        src={trend_img}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Jobs in Indiana <br/>Set to Rise</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
        <section>
            <Container className="p-5">
                <h2>Selected Pathways</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
            </Container>
            <section>
            <div className="row">
                    <div className="col border p-5">Junior Developer</div>
                    <div className="col border p-5">Business Analyst</div>
                    <div className="col border p-5">Product Owner</div>
                </div>
                <div className="row">
                    <div className="col border p-5">Software Developer</div>
                    <div className="col border p-5">Product Manager</div>
                    <div className="col border p-5">IT Support</div>
                </div>
            </section>
        </section>
      <Container>
          <Paper className="p-4 mt-5" elevation={3}>
              <Carousel variant="dark" controls={false} indicators={false}>
                  <Carousel.Item>
                      <blockquote>“In terms of the highest tech worker percent growth by state, <strong>Indiana</strong> comes in at the second spot with <strong>8.4% growth</strong>.”

                      </blockquote>
                      <p className="mb-2">- The Technology Councils of North America</p>

                  </Carousel.Item>
                  <Carousel.Item>
                      <blockquote>“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                          nonumy eirmod tempor invidunt ut labore et dolore magna” </blockquote>
                      <p>~</p>
                  </Carousel.Item>
              </Carousel>
          </Paper>
      </Container>
          <Container className="p-5">
              <h3>How We Work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
          </Container>
          <Container className="p-5">
              <h3>Latest News</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
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
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}