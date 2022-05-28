import React from 'react';
import '../../vendor/normalize.css';
import './AboutMe.css';
import avatar from '../../images/droch.jpg'

function AboutMe() {
    return (

        <section className='about-me'>
            <h2 className='about-me__heading heading'>Студент</h2>
            <div className='about-me__student-info'>
                <div className='about-me__student-info1'>
                    <h3 className='about-me__student-name'>Виталий</h3>
                    <h4 className='about-me__student-profession'>Фронтенд-разработчик, 30 лет</h4>
                    <p className='about-me__student-text'>Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
                        и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
                    <div className='about-me__student-links'>
                        <a href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md' className='about-me__student-link'>Facebook</a>
                        <a href='https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md' className='about-me__student-link'>Github</a>
                    </div>
                </div>
                <img className='about-me__avatar' src={avatar} alt='Фото студента' />
            </div>
        </section>

    );
}

export default AboutMe;