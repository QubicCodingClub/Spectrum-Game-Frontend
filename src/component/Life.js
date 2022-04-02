import React from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import "../css/Life.css";
const Life = ({ props }) => {
    var life = [],
        i;
    for (i = 0; i < props.life; i++)
        life.push(
            <FaHeart className="LifeIntact" id="LifeIcon" key={"l" + i} />
        );
    for (i = 0; i < 5 - props.life; i++)
        life.push(
            <FaHeartBroken className="LifeUsed" id="LifeIcon" key={"ll" + i} />
        );
    return <div className="Life">{life}</div>;
};

export default Life;
