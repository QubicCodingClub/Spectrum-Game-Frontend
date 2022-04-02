import React from "react";
import Life from "../component/Life";

const Home = () => {
    return (
        <div className="Home">
            <Life props={{ life: 5 }} />
            <Life props={{ life: 4 }} />
            <Life props={{ life: 3 }} />
            <Life props={{ life: 2 }} />
            <Life props={{ life: 1 }} />
        </div>
    );
};

export default Home;
