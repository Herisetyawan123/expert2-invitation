import React from "react";

function LeftPartial() {
  return (
    <div className="w-full h-full bg-[url('/wallpaper.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center p-20 left-side relative">
      <div className="bg-[#282A39] bg-opacity-80 rounded-xl p-5 w-full h-full relative">
        <div className="border-2 border-[#EFE8D6] p-5 rounded-xl w-full h-full">
          <div className="box-couple w-64 h-96 rounded-t-full bg-[#d7c1a0] mx-auto mb-10"></div>
          <div className="text-header font-['Tangerine'] font-bold text-3xl xl:text-6xl text-center text-[#d7c1a0]">
            <h1>Cahya Aditia</h1>
            <h1>&</h1>
            <h1>Lucinta Luna</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPartial;
