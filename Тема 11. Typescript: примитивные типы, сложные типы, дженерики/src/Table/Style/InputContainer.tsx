import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  .form_submit {
    margin-left: 12px;
    flex-direction: column;
    align-items: flex-end;
    display: flex;

    .form_date {
      display: flex;
      font-weight: bold;
      text-align: center;
      right: 5px;
      color: rgba(27, 0, 255, 0.58);
      background: transparent;
      align-items: flex-start;
      justify-content: center;
      margin-bottom: auto;

      .form_calendar {
        position: absolute;
        z-index: 100;
        top: 0px;
        right: 20px;
      }
    }

    button {
      align-items: flex-end;
      height: 40px;
      padding: 8px;
      color: #cecece;
      letter-spacing: 1.5px;
      font-weight: 600;
      box-sizing: border-box;
      background: rgba(27, 0, 255, 0.58);
      border: 1px solid rgba(27, 0, 255, 0.58);
      -webkit-transition: 0.5s;
      transition: 0.5s;
      outline: none;
      border-radius: 6px;
      -webkit-box-shadow: 0 0 16.5px 1px rgba(27, 0, 255, 0.28);
      -moz-box-shadow: 0 0 16.5px 1px rgba(27, 0, 255, 0.28);
      box-shadow: 0 0 16.5px 1px rgba(27, 0, 255, 0.28);
    }
    button:hover {
      padding: 7px;
      height: 40px;
      color: #fcfcfc;
      letter-spacing: 1.5px;
      font-weight: 700;
      box-sizing: border-box;
      border: 1px solid rgba(255, 0, 0, 0.58);
      background-color: rgba(255, 0, 0, 0.58);
      -webkit-transition: 0.5s;
      transition: 0.5s;
      outline: none;
      border-radius: 6px;
      -webkit-box-shadow: 0 0 16.5px 1px rgba(255, 0, 0, 0.28);
      -moz-box-shadow: 0 0 16.5px 1px rgba(255, 0, 0, 0.28);
      box-shadow: 0 0 16.5px 1px rgba(255, 0, 0, 0.28);
    }
  }

  .form_input {
    width: calc(100% - 150px);
    display: flex;
    flex-direction: column;
    position: relative;

    .form_select {
      border: 1px solid #f3f3f4;
      background-color: #f3f3f4;
      border-radius: 6px;

      .form_message {
        max-width: calc(100%- 75px);
        background-color: #f3f3f4;
        padding: 6px;
        box-sizing: border-box;
        font-weight: 700;
        letter-spacing: 1.5px;
        border: 1px solid #f3f3f4;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
        text-transform: lowercase;
        border-radius: 6px;
        padding-left: 12px;
        padding-right: 12px;
      }

      .form_message[placeholder]:empty::before {
        content: attr(placeholder);
        color: #555;
        letter-spacing: 0.8px;
        font-weight: bold;
      }

      .form_message[placeholder]:empty:focus::before {
        content: "";
        font-weight: bold;
      }

      .form_message:focus {
        box-sizing: border-box;
        border: 1px solid rgba(255, 0, 0, 0.58);
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
        border-radius: 6px;
        -webkit-box-shadow: 0 0 16.5px -1px rgba(255, 0, 0, 0.28);
        -moz-box-shadow: 0 0 16.5px -1px rgba(255, 0, 0, 0.28);
        box-shadow: 0 0 16.5px -1px rgba(255, 0, 0, 0.28);
      }

      .form_message__doing {
        letter-spacing: 0.8px;
        text-transform: lowercase;
        font-weight: 500;
      }
    }

    .form_label {
      display: flex;

      .form_input {
        display: none;
      }
      .form_active {
        width: 100%;
        margin-top: 15px;
        margin-bottom: 5px;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: bold;
      }

      input[type="file"] {
        margin-top: 12px;
        align-items: flex-end;
        height: 40px;
        width: 100%;
        padding: 8px;
        color: #cecece;
        letter-spacing: 1.5px;
        font-weight: 600;
        box-sizing: border-box;
        background: rgba(27, 0, 255, 0.58);
        border: 1px solid rgba(27, 0, 255, 0.58);
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
        border-radius: 6px;
        -webkit-box-shadow: 0 0 16.5px 1px rgba(27, 0, 255, 0.28);
        -moz-box-shadow: 0 0 16.5px 1px rgba(27, 0, 255, 0.28);
        box-shadow: 0 0 16.5px 1px rgba(27, 0, 255, 0.28);
      }
    }
  }
`;
