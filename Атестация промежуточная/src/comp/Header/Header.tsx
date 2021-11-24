import styled from 'styled-components';

export const Header = styled.div`
  height: 10vh;
  background: white;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .audience_block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
      font-size: 14px;
      font-weight: 500;
      color: black;
      letter-spacing: 0.9px;
      text-transform: uppercase;
    }

    .signUp_block {
      padding: 10px;
      min-width: 100px;
      text-align: center;
      border-radius: 12px;
    }
    .signIn_block {
      padding: 10px;
      min-width: 100px;
      text-align: center;
      border-radius: 12px;
    }
  }

  .menu_block {
    display: flex;
    flex-direction: row;
    .post_block {
      padding: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;

      .img {
        padding: 10px;
        height: 30px;
        width: 30px;
        background: gold;
      }
      span {
        margin-left:10px;
        font-size: 14px;
        font-weight: 500;
        color: black;
        letter-spacing: 0.9px;
        text-transform: uppercase;
      }
    }
    .user_block {
      padding: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;

      .img {
        padding: 10px;
        height: 30px;
        width: 30px;
        background: gold;
      }
      span {
        margin-left:10px;
        font-size: 14px;
        font-weight: 500;
        color: black;
        letter-spacing: 0.9px;
        text-transform: uppercase;
      }
    }
  }

  .logo_block {
    .logo_img {
    }
    span {
      font-weight: bolder;
      font-size: 25px;
    }
  }
`;
