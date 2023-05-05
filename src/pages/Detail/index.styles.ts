import styled from "styled-components";

export const DetailPageStyled = styled.div`
  margin: 30px 0;
  .card {
    background-color: transparent;
    color: white;
    margin-bottom: 25px;
    @keyframes animatedBackground {
      from {
        background-position: 0 0;
      }
      to {
        background-position: 900% 0;
      }
    }
    .bg {
      animation: animatedBackground 900s linear infinite alternate;
      background-repeat: repeat-x;
      background-size: auto 100%;
      position: absolute;
      top: 90px;
      left: 0;
      height: 484px;
      width: 100%;
      background-color: black;
      z-index: 0;
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#050301, #fa830545, #050301);
        backdrop-filter: blur(6px);
      }
    }
    & > * {
      z-index: 1;
      position: relative;
    }

    .title {
      font-size: 22px;
      font-weight: 700;
      color: #fa8305;
    }
  }
  .media {
    .card {
      .image {
        border: solid 3px #fa8305;
        height: 384px;
        max-width: 300px;
        margin: auto;
        margin-top: 30px;
        margin-bottom: 50px;
        border-radius: 16px;
      }
    }
  }
`;
