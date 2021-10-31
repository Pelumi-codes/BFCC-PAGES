import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import PolicyText from "components/Policy/PolicyText";
import Policy from "components/Policy/Policy";

const PolicyPrivacy = () => {
  return (
    <div>
      <Navbar />
      <PolicyText />
      <Policy />
      <Footer />
    </div>
  );
};

export default PolicyPrivacy;
