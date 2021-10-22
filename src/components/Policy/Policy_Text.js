import Spacer from "components/Spacer";
import Styled from "styled-components";

const Wrapper = Styled.div`
Height: 38.4rem;
background-color: var(--primary_main);

.policyTextCaption {
    font-size: 9.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 8.4rem;
    text-align: center;
    color: var(--white); 
}

`;

const Policy_Text = () => {
  return (
    <Wrapper>
      <Spacer y={10.1} />
      <h2 className="policyTextCaption textCenter">Policy Privacy</h2>
      <Spacer y={19.8} />
    </Wrapper>
  );
};

export default Policy_Text;
