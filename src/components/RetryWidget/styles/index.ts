import styled from "styled-components";

export const RetryWidgetContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  > h1 {
    color: #fff;
  }

  button {
    padding: 10px;
    border-radius: 20px;

    :hover {
        opacity: .8
    }
  }
`;
