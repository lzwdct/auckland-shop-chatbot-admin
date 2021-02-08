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

/** 
class Main extends Component{
    UNSAFE_componentWillMount(){
        const { history, login } = this.props;

        if(!login.success)
            history.push('/login');
    }
    render(){
        return(
            <div>
                <ShopList />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login
});

Main = connect(mapStateToProps, null)(Main)
*/
export default Main