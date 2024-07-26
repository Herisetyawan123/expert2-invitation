import React from "react";

function WeddingGift() {
  return (
    <div className="w-full overflow-hidden text-[#f0ddc0] bg-[#423740]">
      <div className="p-10">
        <h1 className="font-['Rochester'] text-5xl text-center">
          Wedding Gift
        </h1>
        <p className="mt-5 text-center text-sm font-['Rondal-Regural']">
          Doa restu anda merupakan karunia yang sangat berarti bagi kami, dan
          jika memberi adalah ungkapan tanda kasih anda, anda dapat memberi kado
          secara cashless.
        </p>
      </div>

      <div className="mt-10 p-5 space-y-10">
        <div
          className="w-full max-w-96 mx-auto py-10 px-5 border text-center rounded-md bg-white/30 backdrop-blur-md"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-['Rochester'] font-semibold text-center">
            Rekening
          </h1>
          <h2 className="mt-10 font-['Rondal-Regural']">Bank BCA</h2>
          <h3 className="mt-3 font-['Rondal-Regural']">983749827493287</h3>
          <h3 className="font-['Rondal-Regural']">Ahmad Maududie</h3>
        </div>

        <div
          className="w-full max-w-96 mx-auto py-10 px-5 border text-center rounded-md bg-white/30 backdrop-blur-md"
          data-aos="fade-left"
        >
          <h1 className="text-5xl font-['Rochester'] font-semibold text-center">
            Rekening
          </h1>
          <h2 className="mt-10 font-['Rondal-Regural']">Bank BCA</h2>
          <h3 className="mt-3 font-['Rondal-Regural']">983749827493287</h3>
          <h3 className="font-['Rondal-Regural']">Ahmad Maududie</h3>
        </div>
      </div>
    </div>
  );
}

export default WeddingGift;
