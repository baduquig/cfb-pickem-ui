import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPicks } from './actions/picks';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPicks());
    });

    return (
        <div>Hi</div>
    )
}

export default App;