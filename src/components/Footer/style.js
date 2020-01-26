import styled from 'styled-components';

export const ContainerFooter = styled.footer `
    .x-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        width: 100%;
        background: #7159c1;
        border-top: 1px solid #fff;
        &__department {
            margin: 0 15px;
            ul {
                margin: 0 15px;
                li {
                    font-family: 'Roboto Condensed', sans-serif;
                    font-size: 14px;
                    color: #fff;
                    cursor: pointer;
                    &:first-child {
                        text-shadow: 0 2px #000;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                }
            }
        }
    }
`;

export const ContainerSocial = styled.div `
    width: 100%;
    height: 50px;
    background: #000;
    .x-footer {
        &__social {
            display: flex;
            justify-content: center;
            align-items: center;
            ul {
                display: flex;
                li {
                    margin: 0px 6px;
                    transform: translateY(12px);
                    cursor: pointer;
                    a {
                        color: #3c3c3c;
                    }
                }
            }
        }
    }
`;

export const ContainerAuthor = styled.div `
    width: 100%;
    height: 30px;
    background: #111;
    .x-footer {
        &__author {
            h2 {
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Pacifico', cursive;
                font-size: 12px;
                font-weight: normal;
                color: #fff;
                opacity: .5;
                transform: translateY(3px);
            }
        }
    }
`; 