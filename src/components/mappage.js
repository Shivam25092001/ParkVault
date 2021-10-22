import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mappage.css";

export const Mappage = () => {
  return (
    <>
      <div>
        <iframe
          className="map-bg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46961.11308854291!2d80.91489324238343!3d26.868002618252703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd9c39925c2d%3A0x78c77cf788392168!2sPARKING!5e0!3m2!1sen!2sin!4v1634792144119!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="dest-input-box">
          <input
            className="dest-input-a"
            type="text"
            placeholder="   Your Destination?"
          ></input>
          <Link to="/firstpage">
            <button className="dest-input-b">Already at a praking</button>
          </Link>
        </div>
      </div>
    </>
  );
};
