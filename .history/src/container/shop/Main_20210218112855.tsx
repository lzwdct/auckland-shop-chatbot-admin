import React, { useState, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import ShopList from './ShopList';

const Main = (props) => {
	const login = useSelector(state => state.login);
	const dispatch = useDispatch();

	useEffect(() => {
		const { history } = props;

        if(!login.success)
            history.push('/login');
    },[])
    
    return(
        <div>
            <ShopList />
        </div>
    );
}

export default Main