import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import OurServices from "../OurServices/OurServices";
import Footer from "../Footer/Footer";
import Vision from "../VisionStatment/Vision";
// import LogoImg from "../components/Image/logoImg.png";
// import basketOfKittens from "../image/basket-of-kittens.jpg";

class Search extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <OurServices />
        <Vision />
        <Footer />
        {/* <img src="./image/cute-cat.jpeg" alt="Placeholder" /> */}
      </div>
    );
  }
}
export default Search;
