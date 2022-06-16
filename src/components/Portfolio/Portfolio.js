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
                    <a className='portfolio__link' href='https://github.com/Amidamaru2199/how-to-learn.git'>Статичный сайт</a>
                    <img className='portfolio__link-img' src={strelka} alt='ссылка' />
                </div>
                <div className='portfolio__link-container'>
                    <a className='portfolio__link' href='https://github.com/Amidamaru2199/russian-travel.git'>Адаптивный сайт</a>
                    <img className='portfolio__link-img' src={strelka} alt='ссылка' />
                </div>
                <div className='portfolio__link-container'>
                    <a className='portfolio__link' href='https://github.com/Amidamaru2199/express-mesto-gha.git'>Одностраничное приложение</a>
                    <img className='portfolio__link-img' src={strelka} alt='ссылка' />
                </div>
            </div>
        </section>

    );
}

export default Portfolio;