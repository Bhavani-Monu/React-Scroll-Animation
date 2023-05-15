import React from 'react';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return(
        <div className="header">
            
            <div className='header-text'>
                <div>
                    <h1>React Scroll Animations</h1>
                    <p>Scroll down to see the animations</p>
                </div>
            </div>
        </div>
    )
}