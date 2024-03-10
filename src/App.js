import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NotesWeb from "./NotesWeb";
import Consult from "./Consult/Consult";
import Doctors from "./Doctor/Doctors";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/consult" element={<Consult />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/journal" element={<NotesWeb />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
