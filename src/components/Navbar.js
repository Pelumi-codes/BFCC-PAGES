import Styled from "styled-components";
import logo from "Icons/logo.png";
import Spacer from "components/Spacer";
import Button from "components/Button";
import { Link } from "react-router-dom";

const Wrapper = Styled.div`
Height: 9.6rem;
background-color: var(--primary_main);
position : relative;

.logo {
    width: 7.3rem;
    height: 7.2rem;
}

@media(max-width: 768px) {

  height: auto;
}
`;

const Navbar = ({ text }) => {
  return (
    <Wrapper className="section">
      <Spacer y={1.6} />
      <div className={`container flexRow alignCenter justifySpaceBetween`}>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link to="/start-here" className="startHere">
          <Button
            className="btn"
            text="start here"
            padding
            maxWidth
            big
            white
          ></Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Navbar;
