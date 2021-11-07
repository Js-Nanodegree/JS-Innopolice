import * as React from 'react';

import moment from 'moment';
import {v4 as uuidv4} from 'uuid';

import {InputScreen} from './Screen/InputScreen';
import {Screen} from './Screen/Table';
import {Container} from './Style/Home';

interface iTodoState {
    message: string;
    messageDesc: string;
    image: any;
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
        console.log({e});
        setState((prev: any) => {
            const data = [...prev, {...e, 'id': uuidv4(), 'status': 'CREATE'}];
            window.localStorage.setItem('Todo', JSON.stringify(data));
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

            window.localStorage.setItem('Todo', JSON.stringify(data));
            return data;
        });
    };

    return (
        <Container>
            <div className="input_card">
                <InputScreen
                    createMessage={(e: any) => {
                        onCreateTodo(e);
                        console.log({e}, 'dsds');
                    }}
                />
            </div>
            <Screen
                state={state.sort(function(a, b) {
                    return moment(a?.date).unix() - moment(b?.date).unix();
                })} onDelete={onDelete} />
        </Container>
    );
};

export interface iTodoScreen {
    state: Array<iTodoState>;
    onDelete: (x: iTodoState, key: number) => void;
}

export default Connected;
