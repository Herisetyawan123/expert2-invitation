import React, { useEffect, useState } from "react";

function DateSection() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-07-30T20:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
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
          <div className="rounded bg-[#D4C8A9] text-[#282A39] text-center flex justify-center items-center text-4xl font-bold">
            {timeLeft.days || 0} hari
          </div>
          <div className="rounded bg-[#D4C8A9] text-[#282A39] text-center flex justify-center items-center text-4xl font-bold">
            {timeLeft.hours || 0} jam
          </div>
          <div className="rounded bg-[#D4C8A9] text-[#282A39] text-center flex justify-center items-center text-4xl font-bold">
            {timeLeft.minutes || 0} menit
          </div>
          <div className="rounded bg-[#D4C8A9] text-[#282A39] text-center flex justify-center items-center text-4xl font-bold">
            {timeLeft.seconds || 0} detik
          </div>
        </div>

        <div className="mt-10 mx-auto">
          <a
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Aurora+%26+Matthew+Wedding&dates=20241005T110000/20241005T170000&location=JW+Marriott+Jakarta+%7C+JW+Marriott+Jkt,+Kuningan,+Kuningan+Tim.,+Kecamatan+Setiabudi,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12950,+Indonesia+%7C+Kota+Jakarta+Selatan&details=Hi,+You%27re+invited+to+our+wedding+ceremony+%7C+Aurora+%26+Matthew+Wedding+%7C+Saturday,+October+05th+2024"
            target="_blank"
            className="bg-[#f0ddc0] px-6 py-2 rounded-full font-bold text-[#282A39] mx-auto block max-w-fit"
          >
            Add to calendar
          </a>
        </div>
      </div>
    </div>
  );
}

export default DateSection;
