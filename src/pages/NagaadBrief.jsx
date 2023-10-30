import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BriefL from '../components/BriefL';
import Related from '../components/Related';
import BriefNagaad from '../components/BriefNagaad';


const NagaadBrief = () => {
  return (
    <div>
      <Nav/>
      <BriefNagaad/>
      <Related/>
      <Footer/>
    </div>
  );
}

export default NagaadBrief;

