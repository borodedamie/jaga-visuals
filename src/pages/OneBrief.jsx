import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BriefOne from '../components/BriefOne';
import Related from '../components/Related';


const OneBrief = () => {
  return (
    <div>
      <Nav/>
      <BriefOne/>
      <Related/>
      <Footer/>
    </div>
  );
}

export default OneBrief;

