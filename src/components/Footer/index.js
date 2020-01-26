import React from 'react';
import { ContainerFooter, ContainerSocial, ContainerAuthor } from './style';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return(
        <ContainerFooter>
            <footer className="x-footer">
                <div className="x-footer__department">
                    <ul>
                        <li>Produto</li>
                        <li>Funcionalidades do Produto</li>
                        <li>Faça seu Orçamento</li>
                        <li>Preços</li>
                        <li>Estudos de Caso</li>
                        <li>Como funciona</li>
                        <li>Cases de Sucesso</li>
                    </ul>
                </div>
                <div className="x-footer__department">
                    <ul>
                        <li>Soluções</li>
                        <li>Gerenciamento de Processos</li>
                        <li>Financeiro</li>
                        <li>Recursos Humanos</li>
                        <li>Marketing & Vendas</li>
                        <li>Custumer Success</li>
                        <li>TI</li>
                    </ul>
                </div>
                <div className="x-footer__department">
                    <ul>
                        <li>Prividade</li>
                        <li>Termos de Uso</li>
                        <li>Termos de Acesso</li>
                        <li>Política de Prividade</li>
                        <li>Política de Dados</li>
                        <li>Controles de Acesso</li>
                        <li>Compartilhamento de Dados</li>
                    </ul>
                </div>
                <div className="x-footer__department">
                    <ul>
                        <li>Ajuda e Suporte</li>
                        <li>SAC</li>
                        <li>Fale Conosco</li>
                        <li>Contato</li>
                        <li>Localização</li>
                        <li>Webinars</li>
                        <li>API</li>
                    </ul>
                </div>
            </footer>

            <ContainerSocial>
                <div className="x-footer__social">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/bruno.carvalho.feitosa97" target="_blank" rel="noopener noreferrer">
                                <FaFacebookSquare size={24} alt="Facebook" title="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/BrunoCarvalhoFeitosa" target="_blank" rel="noopener noreferrer">
                                <FaGithubSquare size={24} alt="GitHub" title="GitHub" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/bruno-carvalho-feitosa/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} alt="LinkedIn" title="LinkedIn" />
                            </a>
                        </li>
                    </ul>
                </div>
            </ContainerSocial>

            <ContainerAuthor>
                <div className="x-footer__author">
                    <h2>Desenvolved by Bruno Carvalho Feitosa</h2>
                </div>
            </ContainerAuthor>
        </ContainerFooter>
    );
}