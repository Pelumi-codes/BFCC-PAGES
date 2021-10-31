import Header from "components/Header";
import React from "react";
import Evaluation from "components/Evaluation";
import Interactions from "components/Interactions";
// import Feedback  from 'components/Feedback';
import Offer from "components/Offer";
import Learnings from "components/Learnings";
import Footer from "components/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Evaluation />
      <Interactions />
      <Offer />
      {/* <Feedback /> */}
      <Learnings />
      <Footer />
    </>
  );
};
export default Landing;
