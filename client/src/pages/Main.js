import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ItemMain from "../components/MainPageComponent/ItemMain";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <Banner />
      <ItemMain />
      <Footer />
    </div>
  );
}
