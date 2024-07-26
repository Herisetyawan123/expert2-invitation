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
      <div className="xl:w-[65%] md:w-[35%] w-[80%] h-[75%] bg-[#282A39] border-2 relative border-[#D4C8A9] mx-auto rounded-t-full mt-16">
        <img
          src="/frame/little-flower.png"
          alt=""
          width={130}
          className="animate-pulse duration-1000"
        />

        {/* ucapan */}

        <div className="w-60 mx-auto relative ">
          <div className="absolute -left-5 bottom-10 -rotate-12 wave-image">
            <img src="/frame/opening/bunga-putih.png" className="w-20" alt="" />
          </div>
          <div className="absolute -right-5 bottom-10 rotate-12 wave-image">
            <img
              src="/frame/opening/bunga-putih.png"
              className="w-20 -scale-100"
              alt=""
            />
          </div>
          <div
            className="relative mx-auto bg-[#282A39]"
            style={{
              WebkitMaskImage: `url('/frame/bingkai-mask.png')`,
              maskImage: `url('/frame/bingkai-mask.png')`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskSize: "100% 100%",
            }}
          >
            {" "}
            {/* Sesuaikan ukuran bingkai */}
            <img
              src={"/frame/bingkai.png"}
              alt="Frame"
              className="absolute w-full h-full object-fill"
            />
            {/* Sesuaikan padding agar sesuai dengan bingkai */}
            <img
              src="/couple.jpeg"
              className="w-full h-full scale-75 object-cover"
              alt=""
              style={{
                WebkitMaskImage: `url('/frame/bingkai-mask.png')`,
                maskImage: `url('/frame/bingkai-mask.png')`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskSize: "100% 100%",
              }}
            />
          </div>
        </div>
        <h1 className="font-['Baskervville'] text-[#D4C8A9] mx-auto text-center px-8 mt-10 text-xl">
          Cahya Aditia
          <br />
          <span className="text-sm"> & </span>
          <br />
          <span>Lucinta Luna</span>
        </h1>
      </div>
    </div>
  );
}

export default OpenSection;
