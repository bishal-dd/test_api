import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";

const API_URL = "http://localhost:3000/api/v1/friends";

const getAPIData = () => {
  return axios.get(API_URL).then((r) => r.data);
};
function App() {
  const [friends, setfriends] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setfriends(items);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home friends={friends} />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
