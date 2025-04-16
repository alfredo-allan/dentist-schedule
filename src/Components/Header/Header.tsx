import React, { useState } from 'react';
import './Header.module.css';
import styles from './Header.module.css';
import logoIco from '../../Assets/Img/teeth.png';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../../Assets/Img/togle-menu.png'; // Importe o ícone do menu

interface HeaderProps {
    // onBagIconClick?: () => void; // Remova ou deixe como está, a lógica agora está interna
}

function Header({ /* onBagIconClick */ }: HeaderProps) {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        console.log('toggleMobileMenu chamado, isMobileMenuOpen:', !isMobileMenuOpen); // ADICIONE ESTE LOG
    };

    const navigateToCadastro = () => {
        navigate('/cadastro'); // Navega para a rota '/cadastro'
        setIsMobileMenuOpen(false); // Fecha o menu mobile após a navegação (opcional)
    };

    return (
        <header className={styles['custon-header']}>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className={styles['content-logo']}>
                        <img className={styles['logo-ico']} src={logoIco} alt="icone" />
                    </div>

                    <button
                        className={`${styles['mobile-menu-toggle']} navbar-toggler`}
                        type="button"
                        onClick={toggleMobileMenu}
                        aria-controls="navbarNav"
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <img src={menuIcon} alt="Menu" className={styles['menu-icon']} />
                    </button>

                    <div className={`${styles['navbar-collapse']} navbar-collapse ${isMobileMenuOpen ? styles['open'] : ''}`} id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className={styles['nav-item']} onClick={navigateToCadastro}>
                                <b className={styles['nav-item-text']} >
                                    Cadastro
                                </b>
                            </li>
                            <li className={styles['nav-item']} >
                                <b className={styles['nav-item-text']} >
                                    Agendamentos
                                </b>
                            </li>
                            <li className={styles['nav-item']} >
                                <b className={styles['nav-item-text']} >
                                    Orçamentos
                                </b>
                            </li>
                            <li className={styles['nav-item']} >
                                <b className={styles['nav-item-text']} >
                                    Financeiro
                                </b>
                            </li>
                            <li className={styles['nav-item']} >
                                <b className={styles['nav-item-text']} >
                                    Entre em contato
                                </b>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Outros itens de navegação, se houver */}
                    </div>
                </nav>
            </div >
        </header >
    );
}

export default Header;