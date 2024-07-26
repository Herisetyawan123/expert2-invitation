import React from "react";

function RsvpSection() {
  return (
    <div className="bg-[url('/bg-rsvp.jpg')] py-16">
      <div className="w-full">
        <h1 className="font-['Rochester'] text-3xl text-center">
          Will You Attend
        </h1>
        <p className="text-center font-['Rochester'] font-semibold mt-2 text-xl">
          RSVP
        </p>
      </div>

      <div className="p-5 md:p-20">
        <div className="bg-white/30 backdrop-blur-md p-5">
          <form action="" className="space-y-5">
            <div className="form-group flex flex-col gap-2">
              <label htmlFor="">Nama</label>
              <input
                type="text"
                placeholder="Nama"
                className="px-4 py-2 rounded-md outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <div className="form-group flex flex-col gap-2">
              <label htmlFor="">Bersedia Hadir ?</label>
              <input
                type="text"
                placeholder="Nama"
                className="px-4 py-2 rounded-md outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <div className="form-group flex flex-col gap-2">
              <label htmlFor="">Jumlah Orang</label>
              <input
                type="text"
                placeholder="Nama"
                className="px-4 py-2 rounded-md outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <div className="form-group flex flex-col gap-2">
              <label htmlFor="">Kirim Ucapan</label>
              <textarea className="px-4 py-2 rounded-md outline-none focus:ring-1 focus:ring-purple-500"></textarea>
            </div>
            <div className="form-btn w-full">
              <button className="bg-green-700 w-full px-5 py-2 text-white rounded-md hover:bg-green-600 duration-500">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RsvpSection;
