import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid black;
  background-color: ${(props) => props.variant === "outline" ? "#000" : "yellow"};
  padding: 15px 32px;
  text-align: center;
  border-radius: 20px;
  color: ${(props) => props.variant === "outline" ? "yellow" : "#000"};
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`;

export const fancyButton = styled(Button)`
background-image: linear-gradient(to right, #f6d365 0%, #fda085 100% );
border: none;
` 