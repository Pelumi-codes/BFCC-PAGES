import Styled from "styled-components";
import logo from "Icons/logo.png";
import Spacer from "components/Spacer";
import Button from "components/Button";
import { Link } from "react-router-dom";
import textPrototype from "Images/textPrototype.png";
import groupStar from "Images/groupStar.svg";
import groupBook from "Images/groupBook.svg";

const Wrapper = Styled.div`
  background-color: var(--primary_main);
  position: relative;

  .logo {
      width: 7.3rem;
      height: 7.2rem;
  }
  .headerGroup{
      background-color: var(--primary_main);
      height:113.3rem;
      position:relative;
  }
  .headerCaption {
      font-size: 9.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 8.4rem;
      text-align: center;
      color: var(--white); 
  }

  .active{
      color: var(--accent_3_main)
  }

  .headerDescription{
      font-family: Platform;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 3.2rem;
      text-align: center;
      color: var(--white); 
      text-align: center;

  }

  .btnStart{
      margin: 0 auto;
  }

  .prototype {
      height: 84.714rem;
      width: 110.2rem;
      margin: 0 16.9rem;
      z-index: 1;
      position: absolute;
      
  }

  .star{
      position: absolute;
      left: 6rem;
      top: 24rem;
  }

  .book{
      position: absolute;
      right: 14rem;
      top: 21rem;
  }

@media (max-width: 768px) {
  height: auto;

  .prototype {
    display: none;
  }

  .star {
    display: none;
  }

  .book {
    display: none;
  }

  .headerCaption {
    font-size:  3.6rem;
    line-height: 5.2rem;
  }

  .headerDescription {
    font-size: 1.8rem;
    width: 50%;
    margin: auto;
    text-align: center;

    br {
      display: none;
    }
}
  .logoBtn {
    padding: 0 2.4rem;
  }
.headerGroup {
  height: auto;
}
}
`;

const Header = ({ text }) => {
  return (
    <Wrapper className="section">
      <Spacer y={1.6} />
      <div
        className={`container flexRow alignCenter justifySpaceBetween logoBtn`}
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link to="/start-here" className="startHere">
          <Button
            className="btn"
            text="start here"
            padding
            fullWidth
            big
            white
          ></Button>
        </Link>
      </div>
      <div className="headerGroup">
        <Spacer y={9.6} />
        <div className="headerCaption">
          Knowledge <br /> Testing for
          <span className="active">
            Active <br />
            Learning.
          </span>
        </div>
        <Spacer y={2.4} />
        <div className="headerDescription">
          Online Assessment that fosters effective learning and achieve <br />
          academic excellence.
        </div>
        <Spacer y={4.2} />
        <Link to="/start-here" className="startHere">
          <Button
            className="btnStart"
            text="start here"
            fullWidth
            big
            white
          ></Button>
        </Link>
        <Spacer y={12.2} />
        <img
          src={textPrototype}
          alt="text prototype"
          className="prototype"
          alignEnd
        />
        {/* <img src={iphone12} alt="iphone12" className="iphone" /> */}
        <img src={groupStar} alt="star" className="star" />
        <img src={groupBook} alt="star" className="book" />
      </div>
    </Wrapper>
  );
};

export default Header;
