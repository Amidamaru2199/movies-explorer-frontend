import React from 'react';
import '../../vendor/normalize.css';
import './SearchForm.css';

function SearchForm() {
    return (

        <div className='search-form'>
            <div className='search-form__container'>

                <input className='search-fom__input' placeholder='Фильм' />
                <button className='search-form__button' type='button' />
                <div className='search-form__positioning-container'>
                    <label class="search-form__switch">
                        <input type='checkbox' />
                        <span class="search-form__slider" />
                    </label>
                    <p className='search-form__text'>Короткометражки</p>
                </div>
            </div>
        </div>

    );
}

export default SearchForm;