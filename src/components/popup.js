import React, {useEffect} from "react";
import ReactDOM from "react-dom";

const Popup = ({trigger}) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        }
    })

    return ReactDOM.createPortal(
        <div className="order-success">
            <p className="order-success__text">Спасибо! Мы с вами свяжемся!</p>
            <button
                onClick={() => {
                    trigger(false);
                }}
                className="order-success__btn">Закрыть окно</button>
        </div>,
        document.getElementById("portal")
    )
}

export default Popup;