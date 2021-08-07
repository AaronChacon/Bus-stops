import React, { useState } from 'react';

import logo from '../../assets/img/aluxion-logo.svg';
import { InputSearch } from '../components/ui/InputSearch';

import { Scrollbars } from 'react-custom-scrollbars-2';
import { CardStop } from '../components/CardStop';

export const Results = () => {

    //form
    const [,setToggle] = useState(false);
    
    const [mobileInput, setMobileInput] = useState(false);
    const [row, setRow] = useState(false);

    let textInput:string = '¿Cuál es tu parada?'
    let textInputB:string = 'Nº de parada'
    

    return (
        <div className="results">
            <div className="results__stops">
    
                <div className="results__stops-container container">
                    <div className="results__stops-header">
                        <img className="results__header-logo" src={logo} alt="Logo" />
                        
                        <div className="results__header-search">
                            <InputSearch
                                placeholder={textInput}
                                setToggle={setToggle}
                            />
                        </div>

                        <div className="results__header-icons">

                            {
                                mobileInput 
                                ?
                                    <svg className="icon-close" onClick={ () => setMobileInput(false) }  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="5.46967" y1="23.8544" x2="23.8544" y2="5.46966" stroke="white" strokeWidth="1.5"/>
                                        <line x1="6.53033" y1="5.85444" x2="24.9151" y2="24.2392" stroke="white" strokeWidth="1.5"/>
                                    </svg>
                                :
                                    <svg className="icon-open" onClick={ () => setMobileInput(true) }  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="3" y1="8.25" x2="28" y2="8.25" stroke="white" strokeWidth="1.5"/>
                                        <line x1="3" y1="20.25" x2="28" y2="20.25" stroke="white" strokeWidth="1.5"/>
                                    </svg>
                            }



                        </div>

                    </div>

                    <div className="results__stops-selector">

                        <button className="results__selector-button btn">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.15606 16.3187L12.7289 21.8825C12.8363 21.966 12.9705 22.0074 13.1062 21.9989C13.242 21.9904 13.37 21.9327 13.4661 21.8365C13.5623 21.7403 13.6201 21.6124 13.6285 21.4766C13.637 21.3409 13.5956 21.2067 13.5122 21.0993L8.89364 16.4808L24.4418 16.4808C24.5899 16.4808 24.7318 16.4219 24.8365 16.3173C24.9412 16.2126 25 16.0706 25 15.9226C25 15.7745 24.9412 15.6325 24.8365 15.5279C24.7318 15.4232 24.5899 15.3644 24.4418 15.3644L8.90265 15.3644L13.5122 10.7548C13.5747 10.7063 13.6261 10.6449 13.6631 10.575C13.7001 10.505 13.7218 10.4279 13.7268 10.3489C13.7317 10.2699 13.7198 10.1907 13.6918 10.1167C13.6638 10.0426 13.6203 9.97539 13.5644 9.91941C13.5084 9.86343 13.4411 9.82 13.3671 9.792C13.293 9.764 13.2139 9.75208 13.1349 9.75701C13.0559 9.76194 12.9788 9.78363 12.9088 9.82062C12.8388 9.85762 12.7775 9.90908 12.7289 9.97158L7.15606 15.5444C7.05594 15.6484 7 15.7872 7 15.9316C7 16.0759 7.05594 16.2147 7.15606 16.3187Z" fill="#42526E"/>
                            </svg>
                        </button>

                        <div className={`results__selector-content ${mobileInput ? 'off': ''} `}>

                            <div className="results__selector-info">
                                <h4 className="results__selector-subtitle">Autobuses cercanos</h4>
                                
                                <h2 className="results__stops-selector-title">
                                    316, Rubén Darío 
                                </h2>
                            </div>

                            <div className="results__selector-icons">

                                <button 
                                    onClick={ () => setRow(true) }
                                    className={`results__button-icon btn ${row ? 'active' : ''}`}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="6.73684" height="6.73684" rx="1" fill="#42526E"/>
                                        <rect x="9.26318" width="6.73684" height="6.73684" rx="1" fill="#42526E"/>
                                        <rect y="9.26318" width="6.73684" height="6.73684" rx="1" fill="#42526E"/>
                                        <rect x="9.26318" y="9.26318" width="6.73684" height="6.73684" rx="1" fill="#42526E"/>
                                    </svg>
                                </button>
                                
                                <button 
                                    onClick={ () => setRow(false) }
                                    className={`results__button-icon btn ${!row ? 'active' : ''}`}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="6.73684" rx="1" fill="#42526E"/>
                                        <rect y="9.26318" width="16" height="6.73684" rx="1" fill="#42526E"/>
                                    </svg>
                                </button>
                                
                            </div>

                        </div>
                        
                        <div className={`results__selector-input ${mobileInput ? 'active': ''} `}>
                            <InputSearch
                                placeholder={textInputB}
                                setToggle={setToggle}
                            />
                        </div>

                    </div>

                    <div className="results__stops-data">

                        <Scrollbars 
                            /* background-color: rgba(66, 82, 110, 0.8); */
                        >

                            <CardStop
                                row={row}
                            />

                            {/* <CardStop
                                row={row}
                            />
                            
                            <CardStop
                                row={row}
                            /> */}

                        </Scrollbars>
                            

                    </div>

                </div>
            </div>

            <div className="results__maps"></div>
        </div>
    )
}
