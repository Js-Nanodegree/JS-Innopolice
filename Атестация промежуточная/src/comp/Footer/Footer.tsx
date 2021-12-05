import styled from 'styled-components';

 const Footer = styled.div`
background: white;
display: flex;
max-height: 200px;
align-items: center;
justify-content: space-between;

.footer_name{
  span {
    font-size: 16px;
    font-weight: bolder;
    color: black;
    letter-spacing: 0.9px;
    text-transform: uppercase;
  }
}

.footer_theme{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding:10px;

  span {
    font-size: 14px;
    font-weight: 500;
    color: black;
    letter-spacing: 0.9px;
    margin-right: 20px;
  }
}
`;

export default Footer;
