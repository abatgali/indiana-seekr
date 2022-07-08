/*
Name: Anant Batgali
Date: 7/4/22
File: profile.js
Description: 
*/
import Layout from "../components/layout";
import {Container, Badge, Form, ProgressBar} from "react-bootstrap";
import {Avatar, Paper} from "@mui/material";
import PlumbingIcon from '@mui/icons-material/Plumbing';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PestControlIcon from '@mui/icons-material/PestControl';
import {Breadcrumb} from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';

profile.getLayout = function getLayout(page) {
    return (
        <Layout>
            <main>{page}</main>
        </Layout>
    )
};

export default function profile() {
    return (
        <>
            <Container className="p-5">
                <Breadcrumb >
                    <HomeIcon/> &nbsp; <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                </Breadcrumb>
                <Paper elevation={3} className="rounded p-5" id="profile-paper">
                    <div >
                        <Avatar id="profile-header" sx={{ height: '70px', width: '70px' }}/>
                        <h2 className="mt-3">Seekr</h2>
                    </div>
                    <hr/>
                    <Container className="p-2">
                    <section id="info-user">
                        <div>
                            <h6>Badges Earned</h6>
                            <div className="d-flex flex-wrap ml-5 mt-3" id="badges">
                                <Badge bg="success" className="rounded-pill">
                                    <PlumbingIcon/> API Builder
                                </Badge>
                                <Badge bg="primary" className="rounded-pill">
                                    <DataObjectIcon/> Data Structures
                                </Badge>
                                <Badge bg="warning" className="rounded-pill">
                                    <DataUsageIcon/> DB Architect
                                </Badge>
                                <Badge bg="dark" className="rounded-pill">
                                    <PestControlIcon/> Debugger
                                </Badge>
                            </div>
                        </div>
                        <div>
                            <h6>Seeking</h6>
                            <Form className="ml-5 mt-3">
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Jobs"
                                    defaultChecked={true}
                                />
                                <Form.Check
                                    disabled
                                    type="switch"
                                    label="Candidates"
                                />
                            </Form>
                        </div>
                        <div>
                            <h6>Your Progress</h6>
                            <div className="small ml-5">Business Analyst Track
                                <ProgressBar variant="danger" now={20} className="w-75 "/>
                            </div>
                            <div className="small mt-2 ml-5">Software Developer Track
                            <ProgressBar variant="dark" now={80} className="w-75"/>
                            </div>

                        </div>
                    </section>
                    </Container>
                </Paper>
            </Container>
        </>
    )
};