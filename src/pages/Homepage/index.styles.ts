import styled from "styled-components";

export const HomePageStyled = styled.div`
  margin: 30px 0;

  .card {
    background-color: transparent;
    color: white;
    font-size: 22px;
    font-weight: 700;

    margin-bottom: 25px;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  .media {
    .card:nth-child(even) {
      .image {
        height: 277px;
        margin-bottom: 25px;
        border-radius: 16px;
      }
    }
    .card:nth-child(odd) {
      .image {
        height: 384px;
        margin-bottom: 25px;
        border-radius: 16px;
      }
    }
  }
`;
