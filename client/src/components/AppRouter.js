import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Add from "./Add";
import Edit from "./Edit";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Add />} />
          <Route path="/update/:_id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
