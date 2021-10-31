import Spacer from "components/Spacer";
import Styled from "styled-components";

const Wrapper = Styled.div`
Height: 38.4rem;
background-color: var(--primary_main);

.faqsheaderCaption {
    font-size: 9.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 8.4rem;
    text-align: center;
    color: var(--white); 
}

.faqsheaderDescription{
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.2rem;
    text-align: center;
    color: var(--white); 
    text-align: center;

}

@media (max-width: 768px) {
   height: auto;
  
    .faqsheaderCaption {
      font-size:  3.6rem;
      line-height: 5.2rem;
    }
  
    .faqsheaderDescription {
      font-size: 1.8rem;
      width: 60%;
      text-align: center;
      margin: auto;
      padding-bottom: 2rem;
  
      br {
        display: none;
      }
  }

`;

const FaqsHeader = () => {
  return (
    <Wrapper>
      <Spacer y={9.6} />
      <h2 className="faqsheaderCaption textCenter">Help center </h2>
      <Spacer y={2.4} />
      <div className="faqsheaderDescription">
        Read through our FAQs below. If you need further assistance, email
        <br />
        admin@bfccentre.com or call 0203 754 8402
      </div>
    </Wrapper>
  );
};

export default FaqsHeader;
