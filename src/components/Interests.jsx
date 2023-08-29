import React from "react";

const Interests = () => {
  return (
    <div className="flex mt-20 flex-col md:flex-row max-w-[100%] w-[100%] py-20 h-fit md:h-[40rem] justify-center items-center md:items-start gap-20 text-white text-[32px] font-bold bg-gradient-to-r from-purple-200 from-10% via-purple-300 via-30% to-purple-400 to-50%">
      <h2 className="max-w-[100%] w-[19rem] md:max-w-[50%] md:w-[19rem]">
        If you’ve got some cool stuff you’d like to share we’d love to see it
        even if there isn’t a fit right now
      </h2>
      <ul className="list-disc leading-[3rem] max-w-[100%] md:max-w-[50%]">
        <p>We are interested</p>
        <li>UI & UX Designer</li>
        <li>2D & 3D Animator</li>
        <li>Photography</li>
        <li>Illustrator</li>
        <li>Creative Strategy</li>
        <li>Copywriting</li>
      </ul>
    </div>
  );
};

export default Interests;
