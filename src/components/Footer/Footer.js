import React from 'react';
import '../../vendor/normalize.css';
import './Footer.css';

function Footer() {
    return (

        <footer className='footer'>
            <div className='footer__container'>
                <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
                <nav className='footer__nav'>
                    <p className='footer__copyrate'>&copy; {new Date().getFullYear()}</p>
                    <div className='footer__links'>
                        <a target="blank" href='https://practicum.yandex.ru' className='footer__link'>Яндекс.Практикум</a>
                        <a target="blank" href='https://github.com' className='footer__link'>Github</a>
                        <a target="blank" href='https://ru-ru.facebook.com/' className='footer__link'>Facebook</a>
                    </div>
                </nav>
            </div>
        </footer>

    );
}

export default Footer;