import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Home = ({ books }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main */}
      <Main books={books} className="flex-grow" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

