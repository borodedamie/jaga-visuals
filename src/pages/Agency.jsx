import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Agency1 from '../components/Agency1';
import Artists from '../components/Artists';
import Team from '../components/Team';

const Agency = () => {
  return (
    <div>
      <Nav/>
      <Agency1/>
      <Artists/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default Agency;
