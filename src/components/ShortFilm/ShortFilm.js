import React from 'react';
import '../../vendor/normalize.css';
import './ShortFilm.css';
import promo from '../../images/promo.jpg'

function ShortFilm() {
    return (

        <div className='short-film'>
            <div className='short-film__container'>
                <div className='short-film__cards'>

                    <div className='card short-film__card'>
                        <img className='card__image' src={promo} alt='Промо фильма' />
                        <p className='card__text'>33 слова о дизайне</p>
                        <p className='card__duration'>1ч42м</p>
                        <button className='card__delete-button' />
                    </div>

                    <div className='card movies-card-list__card'>
                        <img className='card__image' src={promo} alt='Промо фильма' />
                        <p className='card__text'>33 слова о дизайне</p>
                        <p className='card__duration'>1ч42м</p>
                        <button className='card__delete-button' />
                    </div>

                    <div className='card movies-card-list__card'>
                        <img className='card__image' src={promo} alt='Промо фильма' />
                        <p className='card__text'>33 слова о дизайне</p>
                        <p className='card__duration'>1ч42м</p>
                        <button className='card__delete-button' />
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ShortFilm;