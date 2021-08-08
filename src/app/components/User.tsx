import React, { FC } from 'react';
interface IUserProps {
    id: number; 
    name: string 
    ocupation: string;
    img: string,
    setModalToggle: Function,
}

export const User:FC<IUserProps> = ({ name, ocupation, img, setModalToggle}) => {
    return (
        <div className="user" onClick={() => setModalToggle(true)}>
            <div className="user__img-container">
                <div className="user__img-overlay"></div>
                <div className="user__img" style={{backgroundImage: `url(${img})`}}></div>
            </div>
            {/* <img className="user__img" src={ img } alt="user-img" /> */}
            <h4 className="user__name">{name}</h4>
            <p className="user__ocupation">{ocupation}</p>
        </div>
    )
}
