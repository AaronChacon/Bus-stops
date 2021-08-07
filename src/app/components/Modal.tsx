import React, { FC } from 'react'
import { Link } from 'react-router-dom';
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
                        <Link to="/results">
                            <button className="btn btn-primary" onClick={() => setModalToggle(false)} >casa</button>
                        </Link>
                        <Link to="/results">
                            <button className="btn btn-primary" onClick={() => setModalToggle(false)} >aluxion</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
