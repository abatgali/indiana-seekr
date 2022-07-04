/*
Name: Anant Batgali
Date: 7/4/22
File: learn.js
Description: 
*/
import Layout from "../components/layout";
import {Container} from "react-bootstrap";
import {Paper} from "@mui/material";
import Image from "next/image";
import sdev from "../public/images/software_dev.jpg"
import jdev from "../public/images/junior_dev.jpg"
import pown from "../public/images/product_owner.jpg"
import pman from "../public/images/product_manager.jpg"
import analyst from "../public/images/business_analyst.jpg"
import support from "../public/images/IT_support.png"

learn.getLayout = function getLayout(page) {
    return (
        <Layout>
            <main>{page}</main>
        </Layout>
    )
};

export default function learn() {
    return(
        <>
            <Container className="p-5">
                <h1>Pick your Path</h1>
                <div className="mx-auto mt-5" id="paths">
                    <Paper elevation={5} className="d-inline-block">
                        <Image src={pman} width={200} height={200}/>
                        <h5>Product Manager</h5>
                    </Paper>
                    <Paper elevation={5} className="d-block">
                        <Image src={pown} width={200} height={200}/>
                        <h5>Product Owner</h5>
                    </Paper>

                    <Paper elevation={5} className="d-block">
                        <Image src={sdev} className="float-left" width={200} height={200}/>
                        <h5>Software Developer</h5>
                    </Paper>

                    <Paper elevation={5} className="d-block">
                        <Image src={jdev} className="float-left" width={200} height={200}/>
                        <h5>Junior Developer</h5>
                    </Paper>

                    <Paper elevation={5} className="d-block">
                        <Image src={analyst} width={200} height={200}/>
                        <h5>Business Analyst</h5>
                    </Paper>

                    <Paper elevation={5} className="d-block">
                        <Image src={support} width={200} height={200}/>
                        <h5>IT Support</h5>
                    </Paper>

                </div>
            </Container>
        </>
    )
};

