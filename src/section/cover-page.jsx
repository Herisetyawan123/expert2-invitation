import React, { useState } from "react";
import FrameCover from "../assets/bg-cover.png";

function CoverPage() {
  const [open, setOpen] = useState(false);
  if (open) {
    return <></>;
  }
  return (
    <div className="w-[100vw] h-[100vh] px-10 fixed bg-[#423740] bg-[url('/wallpaper.png')] bg-no-repeat bg-center bg-cover flex justify-center items-center z-50">
      <div className="rounded-md relative">
        <div className="absolute w-full h-full flex flex-col justify-center items-center">
          <h3
            className="font-semibold text-xl md:text-3xl font-['Playfair+Display'] text-[#d7c1a0] mb-2 md:mb-10"
            data-aos="fade-up"
          >
            Wedding Invitation
          </h3>
          <div className="cover-text text-center text-2xl md:text-4xl mt-2 md:mt-10 font-['Tangerine'] text-[#d7c1a0] font-bold">
            <h1 className="" data-aos="fade-in">
              Anhar Muchlis
            </h1>
            <p data-aos="fade-in">&</p>
            <h1 className="" data-aos="fade-in">
              Deana
            </h1>
          </div>

          {/* date */}
          <p
            className="font-['Playfair+Display'] text-sm md:text-lg mb-5 md:mb-10 md:mt-2 text-[#d7c1a0]"
            data-aos="fade-up"
          >
            10 January 2024
          </p>
          <button
            onClick={() => setOpen((prevState) => !prevState)}
            data-aos="fade-up"
            className="px-8 py-2 text-sm rounded-full hover:border-[#423740] border border-[#d7c1a0] hover:text-[#423740] hover:bg-[#d7c1a0] font-semibold duration-500 hover:scale-105 bg-[#423740] text-[#d7c1a0] font-['Playfair Display']"
          >
            Open Invitation
          </button>
        </div>
        <img
          src={FrameCover}
          className="h-[80%] object-contain rounded-md"
          alt=""
          // data-aos="fade-in"
        />
      </div>
      {/* <div className="w-[90%] sm:w-[80%]  md:w-[80%] lg:w-[50%]  flex justify-center items-center p-7 bg-[#fff] bg-[url('/bg-cover.png')] bg-contain sm:bg-inherit bg-no-repeat bg-center rounded-md">
        <button
          onClick={() => setOpen((prevState) => !prevState)}
          className="px-8 py-2 rounded-full hover:border-[#423740] border hover:text-[#423740] hover:bg-white font-semibold duration-500 hover:scale-105 bg-[#423740] text-white font-['Playfair Display']"
        >
          Open Invitation
        </button>
      </div> */}
    </div>
  );
}

export default CoverPage;
