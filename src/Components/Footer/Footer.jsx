import React from 'react';
import s from './Footer.module.css';
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return(
        <div className={s.content}>
            <div className={s.column}>
                <h1>ABOUT</h1>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/about">Careers</NavLink>
                <NavLink to="/about">Corporate Sales</NavLink>
                <NavLink to="/about">Where To Buy</NavLink>
            </div>

            {/*<div className={s.column}>*/}
            {/*    <h1>SUPPORTS</h1>*/}
            {/*    <a href='#'>Contact</a>*/}
            {/*    <a href='#'>Returns</a>*/}
            {/*    <a href='#'>Warranty</a>*/}
            {/*    <a href='#'>Product Reqistration</a>*/}
            {/*    <a href='#'>Help</a>*/}

            {/*</div>*/}
            {/*<div className={s.column}>*/}
            {/*    <h1>LEGAL</h1>*/}
            {/*    <a href='#'>Privacy</a>*/}
            {/*    <a href='#'>Terms</a>*/}
            {/*    <a href='#'>Patents</a>*/}
            {/*    */}
            {/*</div>*/}
            {/*<div className={s.column}>*/}
            {/*    <h1>OTHER</h1>*/}
            {/*    <a href='#'>Account</a>*/}
            {/*    <a href='#'>Program</a>*/}
            {/*    */}
            {/*</div>*/}
            {/* <div className={s.string}>
               ldklfksldkfldklf
                fkdkfl
            </div>
             */}
        </div>
        
        
    )
}
