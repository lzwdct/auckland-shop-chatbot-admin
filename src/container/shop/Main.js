import React, { Component } from 'react';
import { connect } from 'react-redux'
import ShopList from './ShopList';

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

export default Main