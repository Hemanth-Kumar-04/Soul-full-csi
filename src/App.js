import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NotesWeb from "./NotesWeb";
import Consult from "./Consult/Consult";
import Doctors from "./Doctor/Doctors";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/consult" element={<Consult />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/journal" element={<NotesWeb />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
