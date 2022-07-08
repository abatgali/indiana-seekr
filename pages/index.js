import Layout from '../components/layout'
import {Carousel, Button, Stack, Container, Card, Modal} from "react-bootstrap";
import one from "../public/images/hero_home.jpeg"
import two from "../public/images/hero_home2.jpeg"
import second from "../public/images/slide2.jpeg"
import three from "../public/images/AdobeStock_223874324.jpeg"
import trend_img from "../public/images/trend.jpeg"
import news_1 from "../public/images/us--in-indianapolis.jpeg"
import news_2 from "../public/images/flag.jpeg"
import {Paper} from "@mui/material";
import Image from "next/image";
import React from "react";
import news_3 from "../public/images/hiring.png"
import recruiter from "../public/images/hire.jpeg"
import Link from "next/link"


export default function Home() {

    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <section>
            <Carousel id="carousel">
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={two}
                        alt="You can land the tech job you are after right here in Indiana."
                    />
                    <Carousel.Caption>
                        <h1>Learn & Empower <br/> Your Career in Tech</h1>
                        <p id="caption">Learn the necessary skills in order to land your dream job all with the help of our resources.</p>
                        <Stack direction="horizontal" gap={3} className="justify-content-center mb-5">
                            <Button variant="danger" href="/#six-routes">Jobs in Tech</Button>
                            <Button variant="secondary" onClick={() => setModalShow(true)}>Get Started</Button>
                        </Stack>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={second}
                        alt="Indiana Seekr accessible to everyone and helps people from every background reach their potential."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={three}
                        alt="Jobs for everyone, hiring not only college graduates but the ones with the right skills. Upskill using our platform right here."
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={trend_img}
                        alt="Indiana on the rise and an attractive place for tech companies."
                    />
                    <Carousel.Caption>
                        <h2>Jobs in Indiana <br/>on the Rise</h2>
                        <p id="another-one">The tech workforce has grown by 16.3% over the past decade, a 60 percent faster rate than seen across other industries.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
        <section>
            <Container className="p-5">
                <h2>Selected Pathways</h2>
                <p className="mt-4 text-center">Select one or more from our six different pathways in order to learn everything you need to land the job!</p>
            </Container>
            <Link href="/learn">
                <section id="six-routes">
                    <div className="row fw-bolder">
                        <div className="col border p-5">Junior Developer</div>
                        <div className="col border p-5">Business Analyst</div>
                        <div className="col border p-5">Product Owner</div>
                    </div>
                    <div className="row fw-bolder">
                        <div className="col border p-5">Software Developer</div>
                        <div className="col border p-5">Product Manager</div>
                        <div className="col border p-5">IT Support</div>
                    </div>
                </section>
            </Link>

        </section>
      <Container>
          <Paper className="p-5 m-5" elevation={3}>
              <Carousel variant="dark" controls={false} indicators={false}>
                  <Carousel.Item>
                      <blockquote>“In terms of the highest tech worker percent growth by state, <strong>Indiana</strong> comes in at the second spot with <strong>8.4% growth</strong>.”

                      </blockquote>
                      <p className="mb-2">- The Technology Councils of North America</p>

                  </Carousel.Item>
                  <Carousel.Item>
                      <blockquote>CompTIA says tech jobs make up 5.5 percent of the state’s workforce, ranking Indiana 21st in the U.S. with over 181,000 workers. </blockquote>
                  </Carousel.Item>
                  <Carousel.Item>
                      <blockquote>“<strong>Indiana</strong> has been a top location to build high-quality software companies with talented teams.” <br/>~ Larry Contrella, general partner with JMI Equity. </blockquote>
                  </Carousel.Item>
              </Carousel>
          </Paper>
      </Container>
          <Container className="p-5">
              <h3>How We Work</h3>
              <div className="mt-5 d-flex justify-content-around" id="work-children">
                  <Carousel className="w-lg-50 me-lg-5" controls={false} indicators={false}>
                      <Carousel.Item>
                          <Image
                              className="d-block w-100 rounded"
                              src={one}
                              alt="Second slide"
                          />
                      </Carousel.Item>
                  </Carousel>
                  <p className="w-lg-50 mt-xs-4">
                      We bring forth a platform that brings more personal and inclusive profiles showcasing relevant experiences,
                      skills and projects all the while making it easily accessible to people from different backgrounds. <br/>Our expertly designed pathways equip you with the necessary tech skills to make sure you have the experience employers are seeking.
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <br/>This gives employers the opportunity to view candidates' portfolios for completed projects and earned skills for a potential hiring opportunity.
                  </p>
              </div>
          </Container>
          <Container className="p-5">
              <h3 id="news">Latest News</h3>

              <div className="d-flex justify-content-around mt-5 mb-5" id="news-children">
                  {card("Indiana’s deep talent pool", news_1, "The time has come to remove “emerging” from the description of Indiana as a major tech hub.")}
                  {card("Skills-Based Hiring", news_3, "College grads aren’t the only target as hiring based on credentials, experience and ability rather than diplomas gains traction.")}
                  {card("Study Identifies Critical Central Indiana Market Demands for Future Growth", news_2, "Indiana is increasingly seen as a major tech hub, evidenced by the results of work by  the Indiana Economic Development Corporation (IEDC) and TechPoint.")}
              </div>
          </Container>

          <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
          />
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

function card(title, img, text) {
    return (
        <Card style={{ width: '18rem' }}>
            <Image src={img} alt="news headline image"></Image>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Hello, Seekr!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Indiana Tech Jobs</h4>
                <p>
                    We can help you unleash your potential, learn and grow to help you chase your place in tech or with hiring the best candidates for your goals!
                </p>
                <div className="d-flex">
                    <Image src={recruiter} className="rounded-pill"></Image>
                </div>
            </Modal.Body>
        </Modal>
    );
}
