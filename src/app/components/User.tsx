import React, { FC } from 'react';

import user from '../../assets/img/users/one.png';

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
            <img className="user__img" src={ user } alt="user-img" />
            <h4 className="user__name">{name}</h4>
            <span className="user__ocupation">{ocupation}</span>
        </div>
    )
}
