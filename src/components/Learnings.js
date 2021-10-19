import Styled from "styled-components";
import Spacer from "components/Spacer";
import { Link } from "react-router-dom";
import Button from "components/Button";
import groupAnimals from "Images/groupAnimals.svg";


const Wrapper = Styled.div`
Height: 81.6rem;
background-color: var(--accent_4_lighter);
position : relative;
top: 112rem;

.learningsCaption {
    font-size: 9.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 8.4rem;
    text-align: center;
    color: var(--black_5); 
}

.active{
    color: var(--primary_main);
}

.learningsDescription{ 
    text-align: center;
    color: #404040;
}

.btnStart{
    margin: 0 auto;
}

.animals{
   
    margin: 0 7rem;
    top: -1rem;
}


`;

const Learnings = ({ text }) => {
  return (
    <Wrapper className="section">
      <Spacer y={9.6} />
        <div className="learningsCaption">
            Testing that <br />identifies  
            <span className="active"> learning <br /> gaps.</span>
        </div>
        <Spacer y={2.4} />
        <div className="learningsDescription t1">
            Every child learns at their pace. Our assessment questions help to 
            identify areas of improvement <br /> and provide essential support that guarantees growth.
        </div>
        <Spacer y={4.8} />
        <Link to="/start-here" className="startHere">
          <Button
            className="btnStart"
            text="start here"
            fullWidth
            big
          ></Button>
        </Link>
        <Spacer y={9.6} />
        <img src={groupAnimals} alt="Animals" className="animals" />    
    </Wrapper>
  );
};

export default Learnings;
