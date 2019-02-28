import styled from 'styled-components';

export const Button = styled.button`
  background: #eff1f3;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  padding: 0;
  text-align: center;
  text-decoration: none!important;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100px;
  height: 29px;
  :hover {
    background: #e7e9ec;
  }
  font-size: 13px;
`;

export const Select = styled.select`
  background: #eff1f3;
  width: 100px;
`;

export const Reviews = styled.div`
  padding: 5px;
  line-height: 20px;
  font-size: 13px;
  max-width: 600px;  
`;

export const Title = styled.button`
font-weight: 700;
font-size: 12px;
line-height: 1.255;
border: none; 
padding: 0;
background-color: transparent;
outline: none;
text-align: left;
`;

export const Starbox = styled.div`
display: flex;
align-items: center;
`;

export const Space = styled.div`
margin: 10px 10px 10px 0px;
`;
