import React from "react";
import FormGroup from "Form/FormGroup";
import Navbar from "components/Navbar";
import ContactText from "Form/ContactText";
import Footer from "components/Footer";

const Contact_Us = () => {
  return (
    <div>
      <Navbar />
      <ContactText />
      <FormGroup />
      <Footer />
    </div>
  );
};

export default Contact_Us;
