import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="text-center bg-dark">
      <div className="row justify-content-center ">
        <div className="col col-12 maxwidth">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
