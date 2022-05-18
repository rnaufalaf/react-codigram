import React from "react";
import { Header, MainContent } from "../components/";

const HomePage = () => {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <MainContent />
      </div>
    </div>
  );
};

export default HomePage;
