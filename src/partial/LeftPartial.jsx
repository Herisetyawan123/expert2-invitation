import React from "react";

function LeftPartial() {
  return (
    <div
      className="w-full h-full bg-[url('/bg.jpeg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center p-20 left-side relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(40, 42, 57, 0.7), rgba(40, 42, 57, 0.7)), url('/bg.jpeg')",
      }}
    >
      <div className="absolute -right-32 -top-32 w-96">
        <img
          src="/frame/flower-white.png"
          className="-scale-y-100 -scale-x-100"
          alt=""
        />
      </div>
      <div className="absolute -left-32 -top-32 w-96">
        <img src="/frame/flower-white.png" className="-scale-y-100" alt="" />
      </div>
      <div className="absolute -right-32 -bottom-32 w-96">
        <img src="/frame/flower-white.png" alt="" />
      </div>
      <div className="absolute -left-32 -bottom-32 w-96">
        <img src="/frame/flower-white.png" className="-scale-x-100" alt="" />
      </div>
      <div
        className="box-couple w-[45%] relative flex justify-center items-center flex-col h-full rounded-t-full bg-[#282A39] border-8 border-[#D4C8A9] mx-auto mb-10"
        style={{
          boxShadow:
            " inset 10px 10px 18px rgba(0, 0, 0, 0.5), inset 0 -4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="absolute top-0 left-0">
          <img src="/frame/little-flower.png" className="w-32" alt="" />
        </div>
        <div className="text-header text-center">
          {/* ucapan */}
          <p className="font-['Futura Book font'] text-[#D4C8A9] mx-auto text-center px-8 mt-10">
            bersama keluarga besar, anda diundang untuk datang ke acara
            pernikahan
          </p>

          <div className="my-3 mt-20">
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
            datanglah di acara pernikahan kami dan selamat menikmati hidangan
            dari kamis
          </p>

          <p className="font-['Futura Book font'] font-bold text-[#D4C8A9] mx-auto text-center px-8 mt-10">
            location
            <span className="text-sm"> jln. mastrip no. 43</span>
          </p>
        </div>

        <div className="mt-5">
          <button className="bg-[#d7c1a0] px-6 py-2 rounded-lg">
            open invitation
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftPartial;
