import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  max-height: 325px;
  transition: 0.2s;
  max-width: 205px;

  & img {
    object-fit: cover;
    border-radius: inherit;
    width: 205px;
    height: 325px;
  }

  & p {
    position: absolute;
    font-weight: 600;
    font-size: 20px;
  }

  & :hover {
    opacity: 0.5;
  }
`;
