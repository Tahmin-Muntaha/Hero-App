import React from 'react';
import Navbar from './Header/Navbar';
import { Outlet } from 'react-router-dom';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import { Home } from 'lucide-react';


const Root = () => {
    return (
        <div>
            <Container>
                <Navbar></Navbar>
                
                <Outlet>
            
                </Outlet>
                <Footer></Footer>
            </Container>
            
        </div>
    );
};

export default Root;