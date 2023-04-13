import styled from "styled-components";

export const BaseLayoutStyled = styled.div`
  background-color: rgb(231, 235, 240);
  .page {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-direction: column;

    min-height: 100vh;
    .content {
      flex: 1;
    }
  }
`;
