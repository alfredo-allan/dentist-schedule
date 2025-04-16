import React from 'react';
import CadastroForm from '../../Components/Register/Register'; // Ajuste o caminho se necessário
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import styles from './RegisterPage.module.css'
const RegisterPage: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <h1 className={styles['title-text-page']}>Cadastro</h1>
            <CadastroForm />
            <Footer />
        </div>
    );
};

export default RegisterPage;