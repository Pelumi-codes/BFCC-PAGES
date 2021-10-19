import Spacer from "./Spacer";
import Styled from "styled-components";
import Button from "./Button";
import dog from "Images/dog.svg"
import { Link } from "react-router-dom";
import students from "Images/students.jpeg"

const Wrapper = Styled.div `
background-color: #FFEA9F;
height: 60.2rem;
position: relative;
top: 112rem;

.wrap {
    display: grid;
    grid-template-columns 2fr 1fr;
}
.miniWrapper{
    display: grid;
    grid-template-rows: 2fr;
    padding-top: 12.2rem;
}

.students {
    margin-top: 11rem;
}

.dog {
position: absolute;
top: -10rem;
right: 0rem;
z-index: 2;
}

.interactionsCaption{
    color: #003399;
}

.quiz {
    color: #7f4804
}
.interactionsAim {
    color: #404040;
    width: 63%;
}
`
;
const Interactions = () => {
    return (
        <Wrapper className="container">
            <div className="wrap">
                <div className="miniWrapper">
                    <h1 className="interactionsCaption">Interactive <br /> <span className="quiz">Quizzes</span> to test <br /> child’s ability</h1>
                    <Spacer y={2.4} />
                    <div className="interactionsAim t1">Access productive learning through our quizzes, tests and evaluation questions.</div>
                    <Spacer y={4.8} /> 
                    <Link to="/Enrol your child now" className="Enrol">
                        <Button
                        className="btnStart"
                        text="Enrol your child now"
                        long
                        padding
                        big
                        ></Button>
                    </Link>
                </div>
                <img src={students} alt="Two Students" className="students" /> 
            </div>
            <img src={dog} alt="A dog" className="dog" />
        </Wrapper>
    )
};

export default Interactions;
