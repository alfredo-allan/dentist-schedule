import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import styles from './HomePage.module.css';
import icoInstagram from '../../Assets/Img/instagram.png';
import icoFacebook from '../../Assets/Img/facebook.png';
import icoYoutube from '../../Assets/Img/youtube.png';
import likdlIco from '../../Assets/Img/linkedin.png';

function Home() {

    return (
        <div className={styles['content-home-page']}>


            <Header /> {/* O Header agora controla o modal */}
           
            <div className={styles['social-network']}>
                <img className={styles['social-network-instagran']} src={icoInstagram} alt="" />
                <img className={styles['social-network-facebook']} src={icoFacebook} alt="" />
                <img className={styles['social-network-youtube']} src={icoYoutube} alt="" />
                <img className={styles['social-network-linkedin']} src={likdlIco} alt="" />
            </div>
            <div className={styles['content-footer-page']}>
                <Footer />
            </div>
        </div>
    );
}

export default Home;