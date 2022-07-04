/*
Name: Anant Batgali
Date: 7/4/22
File: profile.js
Description: 
*/
import Layout from "../components/layout";
import {Container} from "react-bootstrap";
import {Avatar} from "@mui/material";
import {Paper} from "@mui/material";

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
                <Paper elevation={3} className="rounded-pill p-3">
                    <h3>Profile</h3>
                    <div className="">
                        <Avatar className=""></Avatar>
                        <h4 className="mt-2">Seekr</h4>
                    </div>
                    <hr/>
                    <div>
                        <h6>Seeking</h6>
                        <h6>Badges Earned</h6>
                        <h6>Your Progress</h6>
                        <h6>Career Preferences</h6>
                    </div>
                </Paper>
            </Container>
        </>
    )
};