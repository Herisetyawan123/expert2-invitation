import React from "react";

function OpenSection() {
  return (
    <div className="h-[100vh] w-full bg-[#282A39] relative pt-16 overflow-hidden">
      <div className="absolute w-[35rem] h-[35rem] -top-48 -left-36">
        <img
          src="/frame/flower-white.png"
          className="w-full h-full object-cover opacity-30"
          alt=""
        />
      </div>
      <div className="absolute w-[35rem] h-[35rem] -bottom-48 -right-48">
        <img
          src="/frame/flower-white.png"
          className="w-full h-full object-cover opacity-30"
          alt=""
        />
      </div>
      <div className="absolute w-[25rem] h-[25rem] z-10 -top-32 -right-28">
        <img
          src="/frame/flower-white.png"
          className="w-full h-full object-cover wave-image"
          alt=""
        />
      </div>
      <div className="absolute w-[25rem] h-[25rem] z-10 -bottom-32 -left-24">
        <img
          src="/frame/flower-white.png"
          className="w-full h-full object-cover  wave-image"
          alt=""
        />
      </div>
      <div className="w-[65%] h-[75%] bg-[#282A39] border-2 relative border-[#D4C8A9] mx-auto rounded-t-full mt-16">
        <img
          src="/frame/little-flower.png"
          alt=""
          width={130}
          className="animate-pulse duration-1000"
        />

        {/* ucapan */}
        <p className="font-['Futura Book font'] text-[#D4C8A9] mx-auto text-center px-8 mt-5">
          bersama keluarga besar, anda diundang untuk datang ke acara pernikahan
        </p>

        <div className="my-5 mt-20">
          <h1 className="text-center font-['Baskervville'] text-[#D4C8A9] font-bold text-5xl">
            Cahya Aditya
          </h1>
          <h1 className="text-center font-['Baskervville'] text-[#D4C8A9] font-bold text-4xl my-2">
            &
          </h1>
          <h1 className="text-center font-['Baskervville'] text-[#D4C8A9] font-bold text-5xl">
            Lucinta Luna
          </h1>
        </div>

        <p className="font-['Futura Book font'] text-[#D4C8A9] mx-auto text-center px-8 mt-10">
          datanglah di acara pernikahan kami dan selamat menikmati hidangan dari
          kamis
        </p>

        <p className="font-['Futura Book font'] font-bold text-[#D4C8A9] mx-auto text-center px-8 mt-10">
          location
          <span className="text-sm"> jln. mastrip no. 43</span>
        </p>
      </div>
    </div>
  );
}

export default OpenSection;
