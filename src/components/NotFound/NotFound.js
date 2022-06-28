import React from 'react';
import { Link } from 'react-router-dom';
import '../../vendor/normalize.css';
import './NotFound.css';

function NotFound() {
    return (

        <div className="not-found">
            <div className='not-found__container'>
                <h1 className='not-found__code'>404</h1>
                <p className='not-found__text'>Страница не найдена</p>
                <Link to='/' className='not-found__link'>Назад</Link>
            </div>
        </div >

    );
}

export default NotFound;