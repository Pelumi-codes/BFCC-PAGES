import Styled from "styled-components";
import Spacer from "./Spacer";
import { Link } from "react-router-dom";

const Wrapper = Styled.div`
background-color: var(--primary_main);
color: #fff;
height: 47.2rem;
position: relative;
top: 112rem;

.line {
    width: 124.8rem;
    height: 0.2rem;
    border: 1px solid white;
}

.footerCopyright {
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;


}
`;

const Footer = () => {
  return (
    <Wrapper className="container">
      <Spacer y={9.6} />
      <div className="footerContact p1 flexRow alignCenter justifyCenter">
        <Link to="/">Home</Link>
        <Spacer x={4.8} />
        <Link to="/contact-us">Contact Us</Link>
        <Spacer x={4.8} />
        <Link to="/faq">Help/FAQ</Link>
      </div>
      <Spacer y={14.4} />
      <div className="line">
        <Spacer y={9.6} />
        <div className="footerCaption flexRow justifySpaceBetween">
          <div className="footerCopyright">
            Copyright © 2021 BFCC, Inc. All rights reserved.
          </div>
          <Link to="/policy-privacy">Privacy policy</Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
