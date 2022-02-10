import React, { useState, useEffect } from "react";
import Cards from "./Covid/mCards";
import Navbar from "./Covid/mNavbar";
import LiveCamers from "./Covid/LiveCamers";

import "./newApp.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutplace from "./Covid/Aboutplace";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Frontpage from "./my_components/Frontpage";
import Map from "./Covid/Map";
import Tourist from "./Covid/Tourist";
function MovieApp() {
  const [istoast, setistoast] = useState(false);
  const [cityinvalid, setcityinvalid] = useState(false);
  const [entry, setEntry] = useState("");
  const [isloading, setisLoading] = useState(true);
  // const [input, setInput] = useState("NEW YORK");
  const [data, setData] = useState("");
  const [icon, setIcon] = useState("sun");
  const [info, setinfo] = useState("Your text will appear here.");
  const [img, setimg] = useState([
    {
      img: "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg",
    },
  ]);
  const notify = () => toast(`🦄 Sorry ${entry.toUpperCase()} images are not available `, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  useEffect(() => {
      setTimeout(() => {
          setisLoading(false);
      }, 2500);
  })
  const citynotfound = () => toast(`🦄 Sorry ${entry.toUpperCase()} is not currently available in weather API `, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  useEffect(() => {
      setTimeout(() => {
          setisLoading(false);
      }, 2500);
  })
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/weather-app"
            element={
              <>
                <Frontpage isloading={isloading} setisLoading={setisLoading} />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Cards
                  cityinvalid={cityinvalid}
                  setcityinvalid={setcityinvalid}
                  citynotfound={citynotfound}
                  istoast={istoast}
                  setistoast = {setistoast}
                  notify={notify}
                  isloading={isloading}
                  img={img}
                  setimg={setimg}
                  data={data}
                  icon={icon}
                  entry={entry}
                  setEntry={setEntry}
                  setinfo={setinfo}
                  info={info}
                />
               
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(50,39,19,1), rgba(50,39,19,0.4))",
                    overflowX: "hidden",
                  }}
                >
                  <LiveCamers img={img} entry={entry} />
                </div>
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(92,63,26,.8), rgba( 153,148,138,.4))",
                  }}
                >
                  <Aboutplace info={info} />
                </div>
                <ToastContainer position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover/>
                  <Tourist />
              </>
            }
          />
          <Route path="/maps" element={
            <>
            <Navbar />
            <Map />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default MovieApp;
