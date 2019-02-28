import styled from 'styled-components';

export const Links = styled.a`
color: #0066c0;
display: inline block;
padding: 5px 10px 5px 10px;
text-decoration: none;
:hover {
  text-decoration: underline;
  color: #c60;
}
`;

export const Descriptor = styled.div`
padding: 2px;
font-size: 14px;
padding: 0px 15px 0px 0px;
`;

export const Number = styled.button`
color: #c76800;
font-size: 17px;
font-weight: bolder;
border: none; 
padding: 0;
background-color: transparent;
outline: none;
text-align: left;
:hover {
  color: #c60;
}
`;

export const Bars = styled.div`
background-color: #f1f1f1;
width: 195px;
height: 17px;
display: inline-block;
border: 1px solid #b1b1b1;
`;

export const Yellow = styled.div`
background-color: #ffc200;
width: 39px;
height:17px;
border-radius: 2px;
background: linear-gradient(to bottom,#ffce00,#ffa700);
background-color: #ffce00;
border-right-color: #cc9204;
`;

export const Rating = styled.div`
color: #797979;
display: inline-block;
`;

export const Starbox = styled.div`
display: flex;
align-items: center;
margin-top: 7px;
margin-bottom: 15px;
justify-content: flex-start;
`;

export const Tooltiptext = styled.div`
  visibility: hidden;
  width: 400px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 3px;
  padding: 10px;
  border: 1px solid #f1f3f5;
  position: absolute;
  z-index: 1;
`;

export const Tooltip = styled.div`
position: relative;
display: inline-block;

&:hover ${Tooltiptext} {
  visibility: visible;
}
`;