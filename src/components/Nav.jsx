import React from 'react';
import {BiMenuAltRight} from 'react-icons/bi'
const Nav = () => {
  return (
    <div className='flex flex-row justify-end md:justify-between m-10'>
      <h2 className='hidden md:flex'>Logo</h2>
      <div className='flex flex-row space-around gap-20 items-center'>
      <p className='text-[black] font-extrabold text-[24px] hidden md:flex'>Work</p>
      <p className='text-[black] font-extrabold text-[24px] hidden md:flex'>Contact</p>
      <div className='flex flex-row text-right'>
      <BiMenuAltRight className='text-[70px] text-right'/>
      </div>
      </div>
    </div>
  );
}

export default Nav;
