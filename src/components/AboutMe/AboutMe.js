import React from 'react';
import '../../vendor/normalize.css';
import './AboutMe.css';
import avatar from '../../images/raf.jpg'

function AboutMe() {
    return (

        <section className='about-me'>
            <div className='about-me__container'>
                <h2 className='about-me__heading heading'>Студент</h2>
                <div className='about-me__student-info'>
                    <div className='about-me__student-info1'>
                        <h3 className='about-me__student-name'>Витик</h3>
                        <h4 className='about-me__student-profession'>Бэкенд-разработчик, 24 годика</h4>
                        <p className='about-me__student-text'>Я&nbsp;туалл и&nbsp;живу в&nbsp;Ленинграде, закончил факультет электронных технологий СК ГМИ. У&nbsp;меня есть брат.
                            Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. Около года работал в&nbsp;компании &laquo;дешевых авиабилетов авиасейлс;.
                            После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
                        <div className='about-me__student-links'>
                            <a target="blank" href='https://www.facebook.com/' className='about-me__student-link'>Facebook</a>
                            <a target="blank" href='https://github.com/Amidamaru2199?tab=repositories' className='about-me__student-link'>Github</a>
                        </div>
                    </div>
                    <img className='about-me__avatar' src={avatar} alt='Фото студента' />
                </div>
            </div>
        </section>

    );
}

export default AboutMe;