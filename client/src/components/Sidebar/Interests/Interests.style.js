import styled from 'styled-components';

export const Descriptor = styled.div`
font-size: 14px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Border = styled.div`
border-top: 1px solid #e7e7e7;
font-size .9em;
padding: 15px 15px 15px 0px
`;

export const Button = styled.button`
  background: #eff1f3;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  margin: 4px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  width: 50px;
  height: 20px;
  font-family: Lato,sans-serif;
  :hover {
    background: #e7e9ec;
  }
`;

export const Title = styled.button`
font-weight: bolder;
font-size: 17px;
line-height: 1.255;
border: none; 
padding: 0;
background-color: transparent;
outline: none;
text-align: left;
`;

export const Rating = styled.div`
  color: #797979;
  display: inline-block;
`;

export const Starbox = styled.div`
display: flex;
align-items: center;
margin-top: 7px;
margin-bottom: 7px;
`;

export const WrapButton = styled.div`
display: flex;
justify-content: space-between;
`;
