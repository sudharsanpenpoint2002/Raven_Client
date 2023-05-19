import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route,Navlink } from "react-router-dom";
import App from './Components/App';
import NFTprofile from './Components/NFTprofile';
import Metadata from './Components/Metadata';
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Splitmerge from "./Components/Splitmerge";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <React.StrictMode>
   
   <BrowserRouter>
   {/* <div style={{backgroundColor:'#040720'}}> */}
      <Routes>
          <Route  path="/"  element={<App />}>
          <Route  path="Home"  element={<Home/>}/>
          <Route path="Nft" element={<NFTprofile />} />
          <Route path="Metadata" element={<Metadata/>} />
          <Route path="Dashboard" element={<Dashboard/>} />
          <Route path="Splitmerge" element={<Splitmerge/>} />
        </Route>
      </Routes>
      {/* </div> */}
     
    </BrowserRouter>
  </React.StrictMode>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




