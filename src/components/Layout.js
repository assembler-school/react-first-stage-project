import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="container-fluid text-center bg-dark p-5">
      <div className="row justify-content-center ">
        <div className="col col-12" style={{ maxWidth: "1200px" }}>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
