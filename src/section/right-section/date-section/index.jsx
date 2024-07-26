import React from "react";

function DateSection() {
  return (
    <div className="py-10 bg-[#423740] bg-[url('/wallpaper.png')] bg-center bg-fixed relative">
      <div className="absolute bg-black w-full h-full top-0 bg-opacity-45"></div>
      <div className="relative">
        <h1
          className="font-['Tangerine'] text-center font-bold text-6xl text-[#f0ddc0]"
          data-aos="fade-up"
        >
          Save The Date
        </h1>
        <h2
          className="font-['Rondal-Regural'] text-lg text-[#f0ddc0] font-semibold text-center"
          data-aos="fade-up"
        >
          Akad nikah & resepsi
        </h2>

        <div className="mt-10 h-24 md:h-32 font-['Rochester'] grid grid-cols-4 px-2 gap-3">
          <div
            data-aos="fade-down"
            className="text-center bg-[url('/frame/frame-date.png')] bg-cover bg-no-repeat bg-center bg-[#423740] text-[#d7c1a0] text-xl md:text-3xl font-semibold shadow-md rounded-md flex justify-center items-center"
          >
            10
            <br />
            Hari
          </div>
          <div
            data-aos="fade-down"
            className="text-center bg-[url('/frame/frame-date.png')] bg-cover bg-no-repeat bg-center bg-[#423740] text-[#d7c1a0] text-xl md:text-3xl font-semibold shadow-md rounded-md flex justify-center items-center"
          >
            10
            <br />
            Jam
          </div>
          <div
            data-aos="fade-down"
            className="text-center bg-[url('/frame/frame-date.png')] bg-cover bg-no-repeat bg-center bg-[#423740] text-[#d7c1a0] text-xl md:text-3xl font-semibold shadow-md rounded-md flex justify-center items-center"
          >
            10
            <br />
            Menit
          </div>
          <div
            data-aos="fade-down"
            className="text-center bg-[url('/frame/frame-date.png')] bg-cover bg-no-repeat bg-center bg-[#423740] text-[#d7c1a0] text-xl md:text-3xl font-semibold shadow-md rounded-md flex justify-center items-center"
          >
            10
            <br />
            Detik
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateSection;
