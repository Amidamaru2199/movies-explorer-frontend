import React, { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './SearchFormSaved.css';

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

function SearchFormSaved({
    handleChangeisSavedShortFilm,
    handleChangeSavedMoviesSearch,
    isSavedShortFilm
}) {

    const search = useInput('', { isEmpty: true });

    const onSubmit = (event) => {
        event.preventDefault();

        handleChangeSavedMoviesSearch(search.value)
    }

    return (

        <div className='search-form-saved'>
            <div className='search-form-saved__container'>
                <form onSubmit={onSubmit} className='search-form-saved__form'>
                    <input
                        onBlur={search.onBlur}
                        name='film'
                        onChange={search.onChange}
                        autoComplete='off'
                        value={search.value}
                        type='text'
                        className='search-form-saved__input'
                        placeholder='Фильм' />
                    {(search.isDirty && search.isEmpty) && <span className='search-form-saved__error'>{'Нужно ввести ключевое слово'}</span>}
                    <button disabled={!search.inputValid} className={(!search.inputValid) ? 'search-form-saved__button_invalid' : 'search-form-saved__button'} type='submit' />
                </form>
                <div className='search-form-saved__positioning-container'>
                    <label class="search-form-saved__switch">
                        <input defaultChecked={isSavedShortFilm} type='checkbox' onChange={handleChangeisSavedShortFilm} />
                        <span class="search-form-saved__slider" />
                    </label>
                    <p className='search-form-saved__text'>Короткометражки</p>
                </div>
            </div>
        </div>

    );
}

export default SearchFormSaved;