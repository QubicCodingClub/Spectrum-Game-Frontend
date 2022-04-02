import React, { useState } from "react";
import Life from "./Life";

const Header = () => {
    const [gameMode, setGameMode] = useState(true);
    const [game, setGame] = useState("Techwood");
    const [lifeCount, setLifeCount] = useState(3);
    const [roundCount, setRoundCount] = useState(1);
    if (gameMode)
        return (
            <div className="Header">
                <p className="Description">
                    {game} || Round {roundCount}
                </p>
                <Life props={{ life: lifeCount }} className="Life" />
            </div>
        );
    else return <div className="Header"></div>;
};

export default Header;
