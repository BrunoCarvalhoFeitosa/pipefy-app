import styled from 'styled-components';

export const Container = styled.div `
    .x-header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        padding: 0 30px;
        color: #fff;
        h1 {
            margin-left: 60px;
            text-transform: lowercase;
            text-shadow: 0 4px #7159c1;
            color: #fff;
            z-index: 99;
            cursor: pointer;
            transition: 0.3s ease;
            &:hover {
                
            }
        }
        &__user {
            position: absolute;
            top: 10px;
            right: 10px;
            img {
                width: 38px;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }
`;