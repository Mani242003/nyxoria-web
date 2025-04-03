import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import { Banner } from '../components/layouts/Banner';
import CountdownTimer from '../components/ui/common/CountdownTimer';
import Footer from '../components/ui/common/Footer';
// import Count from '../components/ui/common/CustomCountContainer';

const Home: React.FC = () => {
    return (
        <>
        <NavBar />
        <Banner />
        <CountdownTimer 
        title="Coming Soon..." 
        deadline={new Date(new Date().setDate(new Date().getDate() + 150))}
      />
      <Footer/>
       
        </>
    );
};

export default Home;