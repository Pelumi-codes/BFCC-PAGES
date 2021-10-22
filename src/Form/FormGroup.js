import React, { useState } from "react";
import Styled from "styled-components";
import Button from "components/Button";
import Elephant from "../Images/Elephant.svg";
import globe from "../Images/globe.svg";
import tabGirl from "../Images/tabGirl.jpeg";
import Spacer from "components/Spacer";

const Wrapper = Styled.div`
height : 0px;
position: relative;


input{
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  padding: 20px 0 20px 16px;
  border: 1px solid #EFEFEF;
  border-radius: 4px;
  width:100%;
  margin-top: 5px;
}

label {
  position: absolute;
  transform: translateY(10px);
  color: var(--grey_6);
  padding: 2px 0 7px 16px;
}
#message { 
  padding: 20px 0 60px 16px;
}
.contactDescription{
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  width: 40%;
  padding-left: 11.9rem;
}

form {
  display: flex;
  flex-direction: column;
  padding-left: 12.4rem; 
}

.contactUsFormImage {
  display : grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 14rem;
  position: relative;
 
}
.globe {
  width: 270px;
  height:382px;
  position: absolute;
  bottom: 200px;
  right: 90px;
  z-index: -1;
}

.tabgirl{
  width: 450px;
  height:450px;
  position: relative;
  z-index:2;
  right:30px;
}

.elephant {
  width: 322px;
  height:415px;
  position: absolute;
  top:150px;
  right:3px;
  z-index: 3;
}

.success-message {
  color: green;
}

.inputValidation {
  color: red;
}

`;

const FormGroup = () => {
  const [values, setValues] = useState({
    username: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const [showLabel, setShowLabel] = useState({
    username: false,
    emailAddress: false,
    phoneNumber: false,
    message: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.username &&
      values.emailAddress &&
      values.phoneNumber &&
      values.message
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    console.log(name);

    if (value) {
      setShowLabel({ ...showLabel, [name]: true });
    } else {
      setShowLabel({ ...showLabel, [name]: false });
    }
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  return (
    <Wrapper className="form-container">
      <Spacer y={9.8} />
      <div className="contactDescription">
        Our team is happy to answer your questions. Fill out the form and we’ll
        be in touch as soon as possible.
      </div>
      <Spacer y={5.4} />
      <div className="contactUsFormImage">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div class="success-message">Submitted!</div>
          ) : null}
          <div style={{ position: "relative" }}>
            {showLabel.username && <label htmlFor="name">Name</label>}
            <input
              id="name"
              class="form-field"
              type="text"
              placeholder="Name"
              name="username"
              value={values.username}
              onChange={handleInputChange}
            />
          </div>
          {submitted && !values.username ? (
            <span className="inputValidation"> Please enter your name </span>
          ) : null}

          <Spacer y={2.4} />
          <div style={{ position: "relative" }}>
            {showLabel.emailAddress && (
              <label htmlFor="email-address">Email</label>
            )}
            <input
              id="email-address"
              class="form-field"
              type="text"
              placeholder="Email Address"
              name="emailAddress"
              value={values.emailAddress}
              onChange={handleInputChange}
            />
          </div>
          {submitted && !values.emailAddress ? (
            <span className="inputValidation">
              {" "}
              Please enter an email address{" "}
            </span>
          ) : null}
          <Spacer y={2.4} />
          <div style={{ position: "relative" }}>
            {showLabel.phoneNumber && (
              <label htmlFor="phone-number">Phone Number</label>
            )}
            <input
              id="phone-number"
              class="form-field"
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          {submitted && !values.phoneNumber ? (
            <span className="inputValidation">
              {" "}
              Please enter your phone number{" "}
            </span>
          ) : null}
          <Spacer y={2.4} />
          <div style={{ position: "relative" }}>
            {showLabel.message && <label htmlFor="message">Message</label>}
            <input
              id="message"
              class="form-field"
              type="text"
              placeholder="Message"
              name="message"
              value={values.message}
              onChange={handleInputChange}
            />
          </div>
          {submitted && !values.message ? (
            <span className="inputValidation"> Please enter your message</span>
          ) : null}
          <Spacer y={2.4} />
          <Button className="btnForm" text="Submit" long maxWidth big></Button>
        </form>
        <img src={tabGirl} alt=" A girl with a tab" className="tabgirl" />
        <img src={Elephant} alt="Elephant" className="elephant" />
        <img src={globe} alt="Globe" className="globe" />
      </div>
    </Wrapper>
  );
};
export default FormGroup;
