import styled, { css } from 'styled-components';

const shrinkLabel = css`
top: -14px;
font-size: 12px;
`;

export const SignUpContainer = styled.div`
  width: 275px;
`;

export const LabelContainer = styled.label`
padding: 0;
margin: 0;
`;

export const Input = styled.input`
background: none;
display: block;
background-color: white;
font-family: 'Yellowtail', cursive;
width: 100%;
margin: 25px 0;
color: black;
font-size: 18px;
border: none;
border-radius: 0;
border-bottom: 1px solid black;
padding: 10px 10px 10px 5px;
margin: 5px;
&: focus {
  outline: none;
  color: black;
  font-family: 'Yellowtail', cursive;
  font-size: 25px;
}
&: focus ~ ${LabelContainer} {
  ${shrinkLabel}
}
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
