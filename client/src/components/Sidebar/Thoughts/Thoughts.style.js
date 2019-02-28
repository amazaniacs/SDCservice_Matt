import styled from 'styled-components';

export const Border = styled.div`
border-top: 1px solid #e7e7e7;
border-bottom: 1px solid #e7e7e7;
font-size 14px;
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
text-decoration: none!important;
vertical-align: middle;
box-sizing: border-box;
width: 300px;
height: 29px;
font-family: Lato,sans-serif;
font-size: 13px;
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

export const Borderbox = styled.div`
margin-top: 10px;
margin-bottom: 10px;
`;
