import React from "react";

function GallerySection() {
  return (
    <div className="w-full py-10">
      <div className="text-center text-[#423740]">
        <h1 className="font-['Rochester'] text-3xl font-semibold">
          Looks Our Happines
        </h1>
        <h2 className="font-['Rochester'] text-xl font-semibold mt-2">
          Galery Kami
        </h2>
      </div>

      <div className="grid grid-cols-12 grid-rows-4 gap-3 mt-10 px-5">
        <div
          data-aos="fade-up"
          className="col-span-12 h-32 md:h-64 bg-slate-500"
        ></div>

        {/* new row */}
        <div
          data-aos="fade-up"
          className="col-span-6 row-span-2 bg-slate-500"
        ></div>
        <div data-aos="fade-up" className="col-span-6 bg-slate-500"></div>
        <div data-aos="fade-up" className="col-span-6 bg-slate-500"></div>
        <div data-aos="fade-up" className="col-span-4 bg-slate-500"></div>
        <div data-aos="fade-up" className="col-span-4 bg-slate-500"></div>
        <div data-aos="fade-up" className="col-span-4 bg-slate-500"></div>

        {/* <div className="col-span-4 h-40 bg-slate-500"></div> */}
      </div>
    </div>
  );
}

export default GallerySection;
