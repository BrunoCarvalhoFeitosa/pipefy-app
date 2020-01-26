import React, { useState } from 'react';
import List from '../List';
import BoardContext from './context';
import produce from 'immer';
import { loadLists } from '../../services/api';
import { Container } from './style';

const data = loadLists();

export default function Board() {

    //State to storage actions from drag and drop
    const [lists, setLists] = useState(data);

    //Function to change the state of an immutable object
    function move(fromList, toList, to, from) {
        setLists(produce(lists, draft => {
            //Picking exact card draggable
            const dragged = draft[fromList].cards[from];
            //Removing card from list to pick in a newer position(list)
            draft[fromList].cards.splice(from, 1);
            //Picking card in a newer position(list)
            draft[toList].cards.splice(to, 0, dragged);
        }));
    }

    //Creation of Context, responsible for sharing information between components of application

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <Container>
                <div className="x-board">
                    {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
                </div>
            </Container>
        </BoardContext.Provider>
    );
}
