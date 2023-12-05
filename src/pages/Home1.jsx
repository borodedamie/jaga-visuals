import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header'
import Shape1 from '../components/Shape1';
import Shape2 from '../components/Shape2';
import Work from '../components/Work'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

const Home1 = () => {
  return (
    <div className='overflow-x-hidden overflow-y-auto'>
      <Nav/>
      <Header/>
      <Shape1/>
      <Shape2/>
      <Work/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default Home1;


