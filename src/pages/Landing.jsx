import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <h1>Landing</h1>
      <div className="content">some content</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: red;
  h1 {
    color: white;
  }
  .content {
    background-color: blue;
    color: yellow;
  }
`;
export default Landing;
