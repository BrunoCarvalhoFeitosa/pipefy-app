import React from 'react'
import { Container } from './style';
import picture from '../../images/picture.jpg';

export default function Header() {
    return (
        <Container>
            <header className="x-header">
                <h1>Pipefy</h1>
                <div className="x-header__user">
                    <img src={picture} alt="User" title="User" />
                </div>
            </header>
        </Container>
    );
}
