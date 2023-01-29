import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPicks } from './actions/picks';

import Body from './components/Body/Body';

import './index.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPicks());
    });

    return (
        <div className='container'>
            <Body />
        </div>
    )
}

export default App;