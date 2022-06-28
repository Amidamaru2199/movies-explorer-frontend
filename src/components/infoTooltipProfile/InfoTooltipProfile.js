import React from "react";
import '../../vendor/normalize.css';
import './InfoTooltipProfile.css'
import goodImg from "../../images/good.svg"
import badImg from "../../images/bad.svg"


function InfoTooltipProfile({ isOpened, onClose, isSuccess }) {
  const goodTitle = 'Данные успешно обновлены!'
  const badTitle = 'Пользователь с такими данными уже существует!'

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

export default InfoTooltipProfile;