import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="text-center bg-dark w-100">
      <div className="maxwidth height100 d-flex flex-column justify-content-between mx-auto w-100">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
