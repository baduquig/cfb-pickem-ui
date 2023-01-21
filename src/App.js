import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPicks } from './actions/picks';

import Body from './components/Body/Body';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPicks());
    });

    return (
        <Body />
    )
}

export default App;