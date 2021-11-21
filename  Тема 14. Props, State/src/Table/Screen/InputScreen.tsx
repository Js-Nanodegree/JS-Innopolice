/* eslint-disable import/no-named-as-default */
import * as React from 'react';

import moment from 'moment';
import Calendar from 'react-calendar';
import Popup from 'reactjs-popup';

import {InputContainer} from '../Style/InputContainer';

const initial = {
    'date': new Date(),
    'message': '',
    'messageDesc': '',
};

interface iInputState {
    date: Date;
    message: string;
    messageDesc: String;
}

export const InputScreen = ({createMessage}: any) => {
    const [state, setState] = React.useState<iInputState>(initial);


    const onSubmit = () => {
        createMessage({
            ...state,
            'date': new Date(state?.date).toLocaleDateString(),
            'message': `${document.getElementsByClassName('form_message')[0]?.textContent?.toString()}`,
            'messageDesc': `${document.getElementsByClassName('form_message')[1]?.textContent?.toString()}`,
        });
        document.getElementsByClassName('form_message')[0].innerHTML = '';
        document.getElementsByClassName('form_message')[1].innerHTML = '';

        return setState(initial);
    };

    const onChangeDate = (e: any) => {
        setState((prev: any) => ({
            ...prev,
            'date': new Date(e).toLocaleDateString(),
        }));
    };

    return (
        <InputContainer>
                <div className="form_input">
                    <div className="form_select">
                        <div
                            className="form_date"
                            id="date"
                            onClick={(e) => console.log(e)}
                        ></div>
                        <div
                            className="form_message"
                            contentEditable="true"
                            placeholder="Повестка дня?"
                        ></div>
                        <div
                            className="form_message form_message__doing"
                            contentEditable="true"
                            placeholder="Решение задачи?"
                        ></div>
                    </div>
                </div>
                <div className="form_submit">
                    <Popup
                        position="left top"
                        trigger={<div
                            className="form_date"
                            id="date"
                            onClick={(e) => console.log(e)}
                        >
                            {moment(state?.date, 'DD.MM.YYYY').format('DD MMMM YYYY')}
                        </div>}
                    >
                        <div>
                            <Calendar value={new Date(Date.now())} onChange={onChangeDate} />
                        </div>
                    </Popup>
                    <div className="form_button">
                        <button onClick={onSubmit}>Опубликовать</button>
                    </div>
                </div>
        </InputContainer>
    );
};
