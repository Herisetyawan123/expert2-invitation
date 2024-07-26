import React from "react";

function RsvpSection() {
  return (
    <div className="bg-[#282A39] text-[#D4C8A9] relative py-16">
      <div className="w-full">
        <h1 className="font-['Rochester'] text-3xl text-center">
          Will You Attend
        </h1>
        <p className="text-center font-['Rochester'] font-semibold mt-2 text-xl">
          RSVP
        </p>
      </div>

      <div className="bg-[#464a64] mx-20 mt-10 p-5 rounded">
        <div className="w-14 h-14 mx-auto text-[#D4C8A9]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="activity-icon ic-rings"
            viewBox="0 0 512 512"
          >
            <path
              fill="#D4C8A9"
              d="M322.656 180c-4 0-7.92.24-11.76.48a171.913 171.913 0 0115.44 23.68 127.941 127.941 0 01124.431 129.736A127.947 127.947 0 01322.656 460a128.135 128.135 0 01-128-128 128.912 128.912 0 0173.2-115.68 111.626 111.626 0 00-17.28-18 151.874 151.874 0 00-63.68 202.08 152.854 152.854 0 00135.76 83.6 151.998 151.998 0 00152-152 151.997 151.997 0 00-152-152z"
            ></path>
            <path
              fill="#D4C8A9"
              d="M326.336 204.16a171.913 171.913 0 00-15.44-23.68c-8.967-.053-33.585 3.44-60.32 17.84a111.626 111.626 0 0117.28 18c23.8-11.406 27.8-12.16 58.48-12.16z"
            ></path>
            <path
              fill="#D4C8A9"
              fillRule="evenodd"
              d="M88.195 193.539A128.17 128.17 0 0050.655 284a128.077 128.077 0 00124.32 127.84c4.488 8.304 15.44 23.68 15.44 23.68s-7.76.48-11.76.48A152.001 152.001 0 0162.701 186.13a152.004 152.004 0 0198.826-53.122c7.129-.825 26.629-.867 34.264-.008a151.296 151.296 0 0193.504 46.92 148.835 148.835 0 0125.12 35.68 151.868 151.868 0 01-63.68 202.08 111.67 111.67 0 01-17.28-18 128.906 128.906 0 0073.2-115.68 128.135 128.135 0 00-128-128 128.165 128.165 0 00-90.46 37.539z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#D4C8A9"
              d="M250.735 417.68a111.67 111.67 0 01-17.28-18c-8.72 4.833-32.624 14.032-58.48 12.16 4.488 8.304 15.44 23.68 15.44 23.68 33.241-3.02 37.741-5.693 60.32-17.84z"
            ></path>
            <path
              fill="#D4C8A9"
              fillRule="evenodd"
              d="M333.641 182.592l18.452 1.854 15.923 4.833.485-41.858 25.34 7.958-23.535 34.619 15.828 5.139 16.199 9.028 53.969-31.936a7.953 7.953 0 003.943-7.482l-3.28-42.956a7.999 7.999 0 00-5.588-7.038l-106.854-33.56a7.998 7.998 0 00-8.608 2.58l-27.25 33.368a7.943 7.943 0 00-1.043 8.393l26.019 57.058zm52.493 12.545l23.582-34.772 23.05 7.24-46.632 27.532zm-34.041-10.691l-22.517-49.25 23.049 7.239-.532 42.011zm89.3-56.058l-4.885-1.534-16.35 20.02 23.203 7.287-1.968-25.773zm-37.721 13.309l16.35-20.021L366.29 104.8l1.968 25.774 35.414 11.123zm-53.868-42.075l-4.885-1.534-16.35 20.021 23.203 7.287-1.968-25.773z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#D4C8A9"
              d="M418.763 71.802l6.002-24.892c1.294-5.368-2.01-10.772-7.376-12.064-5.37-1.294-10.771 2.009-12.065 7.377l-6.002 24.89c-1.084 4.497 1.056 9.016 4.934 11.127.752.409 1.57.728 2.442.939 5.37 1.294 10.771-2.008 12.065-7.377zM369.406 67.311l-7.315-28.254c-1.383-5.346-6.84-8.559-12.186-7.174-5.346 1.384-8.558 6.84-7.174 12.186l7.315 28.254a9.974 9.974 0 004.903 6.278 9.967 9.967 0 007.284.897c5.345-1.384 8.556-6.841 7.173-12.187zM477.463 66.94c-4.17-3.618-10.487-3.173-14.106.998L444.67 89.467c-3.621 4.17-3.173 10.486.997 14.106a9.99 9.99 0 001.783 1.237c4.034 2.196 9.189 1.376 12.323-2.234l18.687-21.53c3.621-4.17 3.173-10.486-.997-14.106z"
            ></path>
          </svg>
        </div>
        <h1 className="text-center mt-5 text-5xl font-['Rochester']">
          Akad Nikah
        </h1>

        <h2 className="text-center mt-5 text-lg font-['Rondal-Regular']">
          20:00 - 24:00
        </h2>

        <h2 className="text-center mt-1 text-3xl font-['Rondal-Regular']">
          30 Juli 2024
        </h2>

        <h2 className="text-center mt-5 text-sm font-['Rondal-Regular']">
          JW Marriott Jkt, Kuningan, Kuningan Tim., Kecamatan Setiabudi, Kota
          Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950, Indonesia
        </h2>
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
