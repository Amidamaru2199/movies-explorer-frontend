import React from "react";
import '../../vendor/normalize.css';
import './InfoTooltip.css'
import goodImg from "../../images/good.svg"
import badImg from "../../images/bad.svg"


function InfoTooltip({ isOpened, onClose, isSuccess }) {
  const goodTitle = 'Вы успешно зарегистрировались!'
  const badTitle = 'Что-то пошло не так! Возможно пользователь с таким email уже зарегистрирован.'

  return (
    <div id="infoTooltip" className={`popup popup-info ${isOpened && "popup_is-opened"} `}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={onClose} type="button" />
        <img src={isSuccess ? goodImg : badImg} alt={isSuccess ? goodImg : badImg} className="popup__info-image" />
        <h2 className="popup__info-title">{isSuccess ? goodTitle : badTitle}</h2>
      </div>
    </div>


  );
}

export default InfoTooltip;