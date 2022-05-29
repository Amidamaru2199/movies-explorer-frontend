import React from 'react';
import '../../vendor/normalize.css';
import './NavTab.css';

function NavTab() {
    return (

        <section className='nav-tab'>
            <h2 className='nav-tab__heading heading'>О проекте</h2>
            <div className='nav-tab__table'>
                <h3 className='nav-tab__title'>Дипломный проект включал 5 этапов</h3>
                <p className='nav-tab__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className='nav-tab__title'>На выполнение диплома ушло 5 недель</h3>
                <p className='nav-tab__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='nav-tab__timetable'>
                <p className='nav-tab__times-back'>1 неделя</p>
                <p className='nav-tab__times-front'>4 недели</p>
            </div>
            <div className='nav-tab__timetable'>
                <p className='nav-tab__stage'>Back-end</p>
                <p className='nav-tab__stage'>Front-end</p>
            </div>
        </section>

    );
}

export default NavTab;