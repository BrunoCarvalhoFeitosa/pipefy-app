import styled from 'styled-components';

export const ContainerMenu = styled.div `
    position: fixed;
    top: 0px;
    left: 0;
    width: 70px;
    height: 100vh;
    background: #7159c1;

    .x-navbar {
        ul {
            width: 20px;
            margin: 100px auto;
            li {
                margin: 22px 0;
                color: #fff;
                cursor: pointer;
                transition: opacity, .85s;
                &:hover {
                    opacity: 0.7;
                    transform: translateY(-6px);
                }
            }
        }
    }
`;