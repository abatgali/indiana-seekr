/*
Name: Anant Batgali
Date: 6/28/22
File: layout.js
Description: 
*/

import Navigation from './navbar'
import Footer from './footer'
import Header from "./header";

export default function Layout({ children }) {
    return (
        <>
            <Header/>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </>
    )
}