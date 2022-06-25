import React, { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './SearchForm.css';

const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true);
    const [minLengthErrror, setMinLengthError] = useState(false);
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const valiation in validations) {
            switch (valiation) {
                case 'minLength':

                    value.length < validations[valiation] ? setMinLengthError(true) : setMinLengthError(false)

                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthErrror) {
            setInputValid(false)

        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthErrror])

    return {
        isEmpty,
        minLengthErrror,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onBlur = (event) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
};



function SearchForm({ handleChangeisShortFilm, isShortFilm, moviesSearchValue, handleChangeMoviesSearch }) {

    const search = useInput('', { isEmpty: true });

    // const [value, setValue] = useState(moviesSearchValue);




    // const onChange = (event) => {
    //     setValue(event.target.value);

    // };

    const onSubmit = (event) => {
        event.preventDefault();

        handleChangeMoviesSearch(search.value)
    }

    return (

        <div className='search-form'>
            <div className='search-form__container'>
                <form onSubmit={onSubmit} className='search-form__form'>
                    <input
                        onBlur={search.onBlur}
                        name='film'
                        onChange={search.onChange}
                        autoComplete='off'
                        value={search.value}
                        type='text'
                        className='search-form__input'
                        placeholder='Фильм' />
                    {(search.isDirty && search.isEmpty) && <span className='search-form__error'>{'Нужно ввести ключевое слово'}</span>}
                    <button disabled={!search.inputValid} className={(!search.inputValid) ? 'search-form__button_invalid' : 'search-form__button'} type='submit' />
                </form>
                <div className='search-form__positioning-container'>
                    <label class="search-form__switch">
                        <input type='checkbox' onChange={handleChangeisShortFilm} />
                        <span class="search-form__slider" />
                    </label>
                    <p className='search-form__text'>Короткометражки</p>
                </div>
            </div>
        </div>

    );
}

export default SearchForm;