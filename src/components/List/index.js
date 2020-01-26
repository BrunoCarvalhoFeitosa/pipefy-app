import React from 'react';
import Card from '../Card/';
import { MdAddCircle } from 'react-icons/md';
import { ContainerList } from './style';

export default function List({ data, index: listIndex }) {
    return (
        <ContainerList done={data.done}>
            <div className="x-list">
                <header>
                    <h2>{data.title}</h2>
                    {data.creatable && (
                        <button type="button">
                            <MdAddCircle size={50} color="#3b5bfd" />    
                        </button> 
                    )}
                </header>

                <ul>
                    { data.cards.map((card, index) => (
                        <Card 
                            key={card.id}
                            listIndex={listIndex}
                            index={index}
                            data={card} 
                        />
                    )) }
                </ul>
            </div>
        </ContainerList>
    );
}
