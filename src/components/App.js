import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@styles/App.css";
import Login from "@components/home/Login";
import Home from "@components/home/Home";
import List from "@components/financiero/List";
import File from "@components/financiero/File";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home/*' element={<Home />} />
          <Route path='/list/*' element={<List />} />
          <Route path='/file/*' element={<File />} />
          </Routes>

    </BrowserRouter>

  );
}

export default App;