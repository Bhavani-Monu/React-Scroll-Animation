import React, { useEffect } from 'react';

import ReactDOM from 'react-dom/client';
import Content from './Section 1/Content';
import Sec2 from './Section 2/Sec2';
import './Section 1/Sec1.css'
import './index.css'
import Header from './Header/Header';
import Logo from './Header/logo.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='wrapper'>
    <div className="header-content">
        <img src={Logo} alt="logo" />
        <div className="header-button"><button >Join Beta</button></div>
    </div>
    <Header />
    <Content  content="In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold." />
    <Sec2 />
    </div>
);


