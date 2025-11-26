import React from 'react';
import Navbar from './Header/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import { Home } from 'lucide-react';


const Root = () => {
    const navigation=useNavigation()
    if(navigation.state==='loading'){
        return (
            <div className="flex justify-center items-center h-[400px]">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
        )
    }
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