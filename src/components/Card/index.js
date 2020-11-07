import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Container, Label } from './style';
import BoardContext from '../Board/context';
import profileUser from '../../images/picture.jpg'

export default function Card({ data, index, listIndex }) {

    //Hook to storage a reference
    const ref = useRef();

    //Recovering data from Context
    const { move } = useContext(BoardContext);
    
    //Function to monitor the drag event
    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', index, listIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    //Function to monitor de drop event
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;
            const draggedIndex = item.index;
            const targetIndex = index;

            //This conditional is evoked when the card even has index between positions
            if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
                return;   
            }

            //Function to pick dimensions(width, height) of card
            const targetSize = ref.current.getBoundingClientRect();

            //Function to calculate middle of card
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            //Function to return quantity of dragglable card
            const draggedOffset = monitor.getClientOffset();

            //Function to pick top of screen and pick quantity dragged indoor card droppable
            const draggedTop = draggedOffset.y - targetSize.top;

            //This condition is evoked when a card from the top is dragged over itself, it prevents unnecessary calculations
            if(draggedIndex < targetIndex && draggedTop < targetCenter) {
                return;
            }

            //This condition is evoked when a card from the bottom is dragged over itself, it prevents unnecessary calculations
            if(draggedIndex > targetIndex && draggedTop > targetCenter) {
                return;
            }

            //Function to execute funcionalities from drag and drop
            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

            //Updating indice of position card between the same column to resolve bug and update index of card
            item.index = targetIndex;

            //Updating indice of position card between columns to resolve bug and update index of card
            item.listIndex = targetListIndex;
        }
    });

    dragRef(dropRef(ref));

    return (
        <Container ref={ref} isDragging={isDragging}>
            <div className="x-card">
                <header>
                    {data.labels.map(label => <Label key={label} color={label} />)}
                </header>
                <p>{data.content}</p>
                {data.user && <img src={profileUser} alt="Bruno Carvalho Feitosa" /> }
            </div>
        </Container>    
    );
}
