import React from 'react';
import { ContainerMenu } from './style';
import { MdDashboard, MdDrafts, MdCheckBox, MdAnnouncement, MdQuestionAnswer, MdCall, MdQueryBuilder, MdBuild } from 'react-icons/md';

export default function Menu() {
    return(
        <ContainerMenu>
            <nav className="x-navbar">
                <ul>
                    <li>
                        <MdDashboard size={25} alt="Apps" title="Apps" />
                    </li>
                    <li>
                        <MdDrafts size={25} alt="Caixa de entrada" title="Caixa de entrada" />
                    </li>
                    <li>
                        <MdCheckBox size={25} alt="Tarefas entregues" title="Tarefas entregues" />
                    </li>
                    <li>
                        <MdAnnouncement size={25} alt="Tarefas atrasadas" title="Tarefas atrasadas" />
                    </li>
                    <li>
                        <MdQuestionAnswer size={25} alt="Chat" title="Chat" />
                    </li>
                    <li>
                        <MdCall size={25} alt="Ligações" title="Ligações" />
                    </li>
                    <li>
                        <MdQueryBuilder size={25} alt="Tempo trabalhado" title="Tempo trabalhado" />
                    </li>
                    <li>
                        <MdBuild size={25} alt="Configurações" title="Configurações" />
                    </li>
                </ul>
            </nav>
        </ContainerMenu>
    );
}