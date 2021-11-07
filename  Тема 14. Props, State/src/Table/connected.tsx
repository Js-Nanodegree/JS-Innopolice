import * as React from 'react';

import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';

import {InputScreen} from './Screen/InputScreen';
import {Screen} from './Screen/Table';

interface iTodoState {
    message: string;
    messageDesc: string;
    date: number;
    status: 'DONE' | 'REJECTED' | 'WAITING' | 'INWORKING' | 'CREATE';
    id: string;
}

const Connected = () => {
    const [state, setState] = React.useState<Array<iTodoState>>([]);

    React.useEffect(() => {
        const loadData = async () => {
            let ctx: iTodoState[] = [];
            const data = await window.localStorage.getItem('Todo');
            if (data) {
                ctx = JSON.parse(data);
            }
            return setState((prev: Array<iTodoState>) => {
                if (Array.isArray(ctx)) {
                    return ctx;
                }
                return prev;
            });
        };

        loadData();
    }, []);

    const onCreateTodo = (e: iTodoState) => {
        setState((prev: any) => {
            const data = [...prev, {...e, 'id': uuidv4(), 'status': 'CREATE'}];
            window.localStorage.setItem(
                'Todo',
                JSON.stringify(data),
            );
            return data;
        });
    };

    const onDelete = (e: iTodoState, key: number) => {
        setState((prev: any) => {
            const index = prev.indexOf(e);
            let data = prev;

            if (index > -1) {
                data = prev.splice(index, 1);
            }

            window.localStorage.setItem(
                'Todo',
                JSON.stringify(data),
            );
            return data;
        });
    };

    return (
        <Container>
            <div className="input_card">
                <InputScreen createMessage={onCreateTodo} />
            </div>
            <Screen state={state} onDelete={onDelete} />
        </Container>
    );
};

export interface iTodoScreen {
    state: Array<iTodoState>;
    onDelete: (x: iTodoState, key: number) => void
}

export default Connected;


const Container = styled.div`
flex-direction:column;
margin-top:20px;
max-width:100vh;

    .input_card{
        padding:12px;
        border-radius:12px;
        -webkit-box-shadow: 3px 3px 10px 3px #ddd;
        -moz-box-shadow: 3px 3px 10px 3px #ddd;
        box-shadow: 3px 3px 10px 3px #ddd;
    }
`;
