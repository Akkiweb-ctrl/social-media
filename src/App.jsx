import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create post");
  return (
    <div className="app-container">
      <SideBar
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      ></SideBar>
      <div className="content-container">
        <Header></Header>
        <MainContent selectedTab={selectedTab}></MainContent>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
