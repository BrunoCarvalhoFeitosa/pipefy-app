import styled from 'styled-components';

export const ContainerList = styled.div `
        padding: 0 15px;
        height: 100%;
        flex: 0 0 230px;
        opacity: ${props => props.done ? 0.45 : 1};

        @media screen and (max-width: 480px) {
            flex: 0 0 40px;
            height: auto;
        }

        @media screen and (device-width: 768px) {
            padding: 0 7px;
            flex: 0 0 130px;
        } 

        @media screen and (device-width: 1024px) {
            padding: 0 25px;
            flex: 0 0 155px;
        }

        & + div {
            border-left: 1px solid rgba(0, 0, 0, 0.05);

            @media screen and (max-width: 480px) {
                border-left: none;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                padding-bottom: 25px;
            }
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 42px;
            h2 {
                font-weight: 500;
                font-size: 16px;
                padding: 0 10px; 
             }

             button {
                 background: none;
                 outline: none;
                 border: none;
                 cursor: pointer;
                 transition: 0.3s linear;
                 &:hover {
                     opacity: .7;
                 }
             }
        }
        ul {
            margin-top: 20px;
        }
`;