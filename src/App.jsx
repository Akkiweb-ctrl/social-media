import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import PostListContextProvider from "./store/PostListContext";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListContextProvider>
      <div className="app-container">
        <SideBar
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        ></SideBar>
        <div className="content-container">
          <Header></Header>
          <MainContent selectedTab={selectedTab} setSelectedTab= {setSelectedTab}></MainContent>
          <Footer></Footer>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
