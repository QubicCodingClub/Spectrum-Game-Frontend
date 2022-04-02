import React from "react";
import { IoAirplane, IoPlanet } from "react-icons/io5";
import { FaHelicopter } from "react-icons/fa";
import { ImQrcode } from "react-icons/im";
const Home = () => {
    return (
        <div className="Home">
            <p className="Heading">TECHNOFLING</p>
            <p className="SubHeading" id="sh1">
                Qubic Coding Club
            </p>
            <p className="SubHeading" id="sh2">
                Spectrum 2022
            </p>
            {/* Animation */}
            <IoAirplane className="icons" id="HomePlane1" />
            <FaHelicopter className="icons" id="HomePlane2" />
            <IoPlanet className="icons" id="HomePlanet1" />
            <ImQrcode className="icons" id="HomeQR" />
        </div>
    );
};

export default Home;
