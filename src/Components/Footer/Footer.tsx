import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';


function Footer() {
    const [isInstitutionalOpen, setIsInstitutionalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleInstitutional = () => {
        if (isMobile) {
            setIsInstitutionalOpen(!isInstitutionalOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles['footer-content']}>
                <div className={styles['newsletter-section']}>
                    <span className={styles['newsletter-title']}>Fique por dentro das novidades !</span>
                    <div className={styles['newsletter-form']}>
                        <input type="text" placeholder="Digite seu nome" className={styles['newsletter-input']} />
                        <input type="email" placeholder="Digite seu e-mail" className={styles['newsletter-input']} />
                        <button className={styles['newsletter-button']}>Cadastrar</button>
                    </div>
                </div>
                <div className={styles['social-section']}>
                    <div className={styles['content-logo-footer']}>
                        <div className={styles['footer-info']}>
                            Leap in Technology Todos os direitos reservados
                            <span className={styles['footer-year']}>© 2025</span>
                        </div>
                    </div>

                </div>


                <div className={styles['company-info']}>
                    <p className={styles['company-text']} ></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;