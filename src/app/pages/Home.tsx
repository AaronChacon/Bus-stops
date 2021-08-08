import React, { useEffect, useRef, useState } from 'react';
import { Modal } from '../components/Modal';
import { Navbar } from '../components/Navbar';
import { InputSearch } from '../components/ui/InputSearch';
import { User } from '../components/User';

/* import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; */

import { users } from '../mocks/user';



export const Home = () => {

    let textInput:string = '¿Cuál es tu parada?'

    const [toggle, setToggle] = useState(false);
    const [modalOpen, setModalToggle] = useState(false);

    let headerText = useRef(null)
    
    useEffect(() => {

        /* gsap.registerPlugin(ScrollTrigger);
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.home__header',
                markers: true,
                start: '-200 0',
                end: '+=470% 0',
                scrub: 100,
                toggleClass: {targets: '.home__header', className: "home__header--active"},
            },
    
        }) */
        
    }, []);
    


    return (
        <>
            <Navbar/>
            <main className="home">
                <div className="home__container container">
                    <section className="home__header">
                        <div className={`home__header-title ${toggle ? 'off' : ''}`}>

                            <h1 
                                ref={headerText}
                                id="title"
                                className="home__header-text" 
                            >
                                Don’t be late, aluxioner
                            </h1>
            
                            <button 
                                className="btn input__button"
                                onClick={ () => setToggle(true) }
                            >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8504 17.1295L13.4557 12.7365C14.6418 11.3849 15.3626 9.6146 15.3626 7.67878C15.3626 3.44458 11.9164 1.56887e-07 7.68132 1.56887e-07C3.44543 -0.00084889 0 3.44458 0 7.67793C0 11.9113 3.44628 15.3567 7.68132 15.3567C9.6146 15.3567 11.3832 14.6384 12.7348 13.4557L17.1304 17.8495C17.2297 17.9497 17.3605 17.9989 17.4904 17.9989C17.6211 17.9989 17.751 17.9488 17.8504 17.8495C18.0499 17.6508 18.0499 17.3282 17.8504 17.1295ZM7.68132 14.3379C4.0075 14.3379 1.01886 11.3501 1.01886 7.67793C1.01886 4.0058 4.0075 1.01801 7.68132 1.01801C11.3551 1.01801 14.3438 4.0058 14.3438 7.67793C14.3438 11.3501 11.3551 14.3379 7.68132 14.3379Z" fill="#8993A4"></path></svg>
                            </button>
                        </div>
                        <div className={`home__header-search ${toggle ? 'active': ''}`}>
                            <InputSearch
                                placeholder={textInput}
                                setToggle={setToggle}
                            />
                        </div>
                    </section>
                    <section className="home__users">

                        <div className="home__users-section">
                            <small className="home__users-breadcrumb">Team</small>
                            <h3 className="home__users-title">Aluxioners</h3>
                        </div>

                        <div className="home__user-list">

                            { 
                                users.map((user:any) => (
                                    <User 
                                        {...user}
                                        key={user.id}
                                        setModalToggle={setModalToggle}
                                    />
                                ))
                            }

                        </div>

                    </section>
                </div>
            </main>

            {
                modalOpen && <Modal setModalToggle={setModalToggle} />
            }
        </>
    )
}
