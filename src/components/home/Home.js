import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import "@styles/App.css";
import Navbar from "@components/home/Navbar";
import List from "@components/financiero/List";
import Fallback from "@common/Fallback";
import { useEffect,  } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate('/login')
    }
  }, [])

return (
  <div>
  <Navbar />
    <main className="app-margin">
      <Routes>
        <Route path="/list" element={
          <Suspense fallback={<Fallback />}>
            <List />
          </Suspense>
        } /> 
        <Route path="/file" element={
          <Suspense fallback={<Fallback />}>
            <File />
          </Suspense>
        } /> 
      </Routes>
    </main>
  </div>
);
}
export default Home;