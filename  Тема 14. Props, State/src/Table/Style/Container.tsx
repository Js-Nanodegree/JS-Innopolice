import styled from 'styled-components';

export const Container = styled.div`
margin-top:20px;
width:100%;
display:flex;
flex-direction: column;

    .body_form{
        text-align:center;
        -webkit-box-shadow: 3px 3px 10px 3px #ddd;
        -moz-box-shadow: 3px 3px 10px 3px #ddd;
        box-shadow: 3px 3px 10px 3px #ddd;
        background:#fbfbfb;
        margin-top:3px;
        margin-bottom:3px;
        padding:6px;
        border-radius:12px;
        display: flex;
        align-items: center;
        flex-direction:row;

        .body_value{
            width:calc(100% - 100px);
            height:100%
            align-items:flex-start;

            .body_message{
                padding:3px;
                display: flex;
                flex-direction:column;
                text-align:left;

                .body_title{
                    font-size:16px;
                    font-weight:bold;
                    text-transform:uppercase;
                    letter-spacing:1.2px;
                    flex-wrap: wrap;
                    word-wrap: break-word


                }
                .body_description{
                    font-size:12px;
                    font-weight:400;
                    letter-spacing:0.8px;
                    flex-wrap: wrap;
                    word-wrap: break-word
                }
            }
        }
        .body_date{
            padding:3px;
            min-width:5rem;
            max-width:120px;

        }
        .body_status{
            padding:3px;
            min-width:5rem;
            width:120px;

            button:hover {
                align-items: flex-end;
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
              button {
                padding: 7px;
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
    }

    .body_form:hover {
        background:#ffffff;
        -webkit-box-shadow: 0 0 16.5px 1px rgba(255, 0, 0, 0.28);
        -moz-box-shadow: 0 0 16.5px 1px rgba(255, 0, 0, 0.28);
        box-shadow: 0 0 16.5px 1px rgba(255, 0, 0, 0.28);
    }
`;
