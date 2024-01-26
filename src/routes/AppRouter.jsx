import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OrderApp } from "../OrderApp";

export const AppRouter = () => {
    return (
        
            <Routes>
                <Route path="/" element={<OrderApp/>} />
            </Routes>
        
    );
};
