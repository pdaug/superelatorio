import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home.tsx";
import Feedback from "./Feedback.tsx";
import Report from "./Report.tsx";

const Pages = function() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={ <Home/> }/>
                <Route path="/report" element={ <Report/> }/>
                <Route path="/feedback" element={ <Feedback/> }/>
            </Routes>
        </BrowserRouter>
    );

};

export default Pages;