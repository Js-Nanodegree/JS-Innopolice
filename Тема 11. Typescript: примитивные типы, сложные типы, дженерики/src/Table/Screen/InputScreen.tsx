/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
import * as React from 'react';

import moment from 'moment';
import Calendar from 'react-calendar';
import Popup from 'reactjs-popup';

import {InputContainer} from '../Style/InputContainer';

import {funcUpload} from './helper';

const initial = {
    'date': new Date(),
    'image': undefined,
    'message': '',
    'messageDesc': '',
};

interface iInputState {
    image: object | undefined;
    date: Date;
    message: string;
    messageDesc: String;
}


export const InputScreen = ({createMessage, fileUpload}: any) => {
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
        createMessage({
            ...state,
            'date': new Date(e).toLocaleDateString(),
        });
    };

    const fileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // TODO HOW TO DELETE PICTURE
        // console.log(ref.current?.data?.delete_url);
        // if (ref.current?.data?.delete_url) {
        //     fetch(ref.current?.data?.delete_url)
        //     .then((data:any) => console.log(data))
        //     .catch((data:any) => console.log(data));
        // }
        const file = e.target.files?.[0];
        const response = await funcUpload.uploadFile(file);
        return setState((prev: any) => ({...prev, 'image': response}));
    };


    return (
        <InputContainer>
            <div className="form_input">
                <div className="form_select">
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
                <div className="form_label">
                    <label
                        className={!state?.image ? 'form_active' : 'form_input'}
                        htmlFor="fileInput"
                    >
                        Browse or select file
                    </label>
                    <input
                        accept="image/*"
                        className={state?.image ? '' : 'form_input'}
                        id="fileInput"
                        type="file"
                        onChange={fileChange}
                    />
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
