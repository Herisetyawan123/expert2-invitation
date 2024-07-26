import React from "react";
import "./RightPartial.css";
import OpenSection from "../section/right-section/opening-section";
import PengantinSection from "../section/right-section/pengantin-section";
import DateSection from "../section/right-section/date-section";
import GallerySection from "../section/right-section/galery-section";
import WeddingGift from "../section/right-section/wedding-gift";
import RsvpSection from "../section/right-section/rsvp-section";
import FooterSection from "../section/right-section/footer-section";

function RightPartial() {
  return (
    <div className="w-full">
      <OpenSection />
      <PengantinSection />
      <DateSection />
      <GallerySection />
      <RsvpSection />
      <WeddingGift />
      <FooterSection />
    </div>
  );
}

export default RightPartial;
