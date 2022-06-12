import React from 'react';
import '../../vendor/normalize.css';
import './Portfolio.css';
import strelka from '../../images/strelka.svg'

function Portfolio() {
    return (

        <section className='portfolio'>
            <div className='portfolio__container'>
                <h3 className='portfolio__title'>Портфолио</h3>
                <div className='portfolio__link-container'>
                    <p className='portfolio__link-text'>Статичный сайт<a className='portfolio__link' href='https://github.com'><img className='portfolio__link-img' src={strelka} alt='ссылка' /></a></p>
                </div>
                <div className='portfolio__link-container'>
                    <p className='portfolio__link-text'>Адаптивный сайт<a className='portfolio__link' href='https://github.com'><img className='portfolio__link-img' src={strelka} alt='ссылка' /></a></p>
                </div>
                <div className='portfolio__link-container'>
                    <p className='portfolio__link-text'>Одностраничное приложение<a className='portfolio__link' href='https://github.com'><img className='portfolio__link-img' src={strelka} alt='ссылка' /></a></p>
                </div>
            </div>
        </section>

    );
}

export default Portfolio;