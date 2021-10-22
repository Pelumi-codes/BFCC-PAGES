import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Policy_Text from "components/Policy/Policy_Text";
import Policy from "components/Policy/Policy";

const Policy_Privacy = () => {
  return (
    <div>
      <Navbar />
      <Policy_Text />
      <Policy />
      <Footer />
    </div>
  );
};

export default Policy_Privacy;
