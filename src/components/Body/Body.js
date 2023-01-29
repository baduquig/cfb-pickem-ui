import React from 'react';

import TopNav from '../TopNav/TopNav';
import Picks from '../Picks/Picks';

import './styles.css';

const Body = () => {
    return (
        <div className='bodyBackground'>
            <TopNav />
            <Picks />
        </div>
    )
}

export default Body;