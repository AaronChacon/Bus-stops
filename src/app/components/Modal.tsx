import React, { FC } from 'react'
import { useLockBodyScroll } from '../Hooks/useLockBodyScroll'

interface IModalProps {
    setModalToggle: Function,
}

export const Modal: FC<IModalProps> = ({setModalToggle}) => {
    useLockBodyScroll();
    return (
        <div className="modal">
            <div className="modal__bg">
                <div className="modal__container">
                    <p 
                        className="modal__close btn"
                        onClick={() => setModalToggle(false)}
                    >
                        cerrar
                    </p>
                    <h1 className="modal__title">
                        Hey Nacho,
                        <br /> 
                        ¿Cuál es tu rumbo, aluxioner?
                    </h1>
                    <div className="modal__btn-container">
                        <button className="btn btn-primary" onClick={() => setModalToggle(false)} >casa</button>
                        <button className="btn btn-primary" onClick={() => setModalToggle(false)} >aluxion</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
