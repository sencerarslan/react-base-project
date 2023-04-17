import styled from "styled-components";

export const BaseLayoutStyled = styled.div`
  background-color: #050301;
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
