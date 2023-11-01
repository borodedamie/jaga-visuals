import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BriefHO from '../components/BriefHO';
import Related from '../components/Related';


const HOBrief = () => {
  return (
    <div>
      <Nav/>
      <BriefHO/>
      <Related/>
      <Footer/>
    </div>
  );
}

export default HOBrief;

