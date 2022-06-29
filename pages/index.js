import Layout from '../components/layout'
import {Carousel, Button, Stack} from "react-bootstrap";
import one from "../public/hero_home.jpeg"
import two from "../public/hero_home2.jpeg"
import three from "../public/AdobeStock_223874324.jpeg"
import four from "../public/AdobeStock_485881931.jpeg"

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