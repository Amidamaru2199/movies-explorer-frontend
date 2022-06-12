import React from 'react';
import '../../vendor/normalize.css';
import './Promo.css';
import web from '../../images/web.svg';

function Promo() {
    return (

        <section className="promo">
            <div className='promo__container'>
                <div className='promo__info'>
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</p>
                    <button className='promo__learn-button'>Узнать больше</button>
                </div>
                <img className='promo__web' src={web} alt='Мир из вебов' />
            </div>
        </section>

    );
}

export default Promo;