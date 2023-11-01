import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BriefDOF from '../components/BriefDOF';
import Related from '../components/Related';


const DOFBrief = () => {
  return (
    <div>
      <Nav/>
      <BriefDOF/>
      <Related/>
      <Footer/>
    </div>
  );
}

export default DOFBrief;

