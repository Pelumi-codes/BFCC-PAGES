import Styled from 'styled-components'
import Spacer from './Spacer'



const Wrapper = Styled.div`
    background-color: #fff;
    position: relative;
    height: 39.7rem;
    z-index: 1;
    top: 112rem;
    
    .evaluationDescription{
        display:grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;

    }

    .evaluationAim {
        width: 53%;
    }

    .digit {
        color: #aaaaaa;
    }
    .evaluation{
        margin-top: 3.4rem;
    }

    .subject {
        color: #404040;
    }
`;
const Evaluation = () => {
    return (
        <Wrapper className="container">
            <Spacer y={10.2} />
            <div className="evaluationDescription">
                <div className="subjectAim">
                    <h2 className="evaluationSubject">Subjects <br /> Evaluated</h2>
                    <Spacer y={2.4} />
                    <div className="evaluationAim t1">Our tests are designed help to give your child full learning and all-round success.</div>
                </div>
                <div className="evaluation">
                    <h4 className="digit">01</h4>
                    <Spacer y={1.2} />
                    <h3 className="subject">English Language</h3>
                </div>

                <div className="evaluation">
                    <h4 className="digit">02</h4>
                    <Spacer y={1.2} />
                    <h3 className="subject">Mathematics</h3>
                </div>
                
                <div className="evaluation">
                    <h4 className="digit">03</h4>
                    <Spacer y={1.2} />
                    <h3 className="subject">Science</h3>
                </div>
            </div>
        </Wrapper>
        
    );
};

export default Evaluation;