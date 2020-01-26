import styled from 'styled-components';

export const Container = styled.div `
    .x-board {
        display: flex;
        justify-content: center;
        align-items: baseline;
        padding: 30px 0;
        min-height: calc(1000px - 140px);

        @media screen and (max-width: 480px) {
            margin: 0 auto;
            display: block;
            width: 236px;
            transform: translateX(34px);
        }
    }
`;