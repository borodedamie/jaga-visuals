import React from "react";

const Clients = () => {
  return (
    <div className="mx-10 mb-20"> 
      <h1 className="text-left my-20 md:text-center font-extrabold text-[55px]">
        Our Clients
      </h1>

        <div className="flex flex-col pb-5 md:flex-row justify-center items-end gap-20">
          <div className="flex w-full md:w-[20rem] flex-col">
          <h2 className="font-bold text-[38px] pb-[1rem]">Latest Articles</h2>
          <div className="border bg-[black] h-[17rem]"></div>
          </div>
          <div className="border bg-[black] h-[17rem] w-full md:w-[20rem]"></div>
          <div className="border bg-[black] h-[17rem] w-full md:w-[20rem]"></div>
        </div>
        <button className="text-center items-center flex mx-auto rounded-2xl font-medium h-[2rem] text-[blue] p-5 border-[blue] border-[2px]">VIEW ALL BLOG POSTS</button>
      </div>
  );
};

export default Clients;
