import React from "react";
import { Routes, Route } from "react-router-dom";
// Views
import Bingo from "./view/Bingo";
import Home from "./view/Home";
import Result from "./view/Result";
import Techwood from "./view/Techwood";
// Components
import Header from "./component/Header";
import Footer from "./component/Footer";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Bingo" element={<Bingo />} />
                <Route path="/Techwood" element={<Techwood />} />
                <Route path="/Result" element={<Result />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
