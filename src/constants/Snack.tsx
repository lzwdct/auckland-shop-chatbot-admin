import React, { Component, Children } from 'react';
import { snack } from '../actions';
import { Snackbar } from '@material-ui/core';
import { connect } from 'react-redux';

class Snack extends Component{
    render(){
        return(
            <Snackbar
                open={this.props.snack}
                message={this.props.message}
            />
        );
    }
}

const mapStateToProps = state => ({
    snack: state.snack.open,
    message: state.snack.message
});

const mapDispatchToProps = dispatch => {
    return {
        close: () => {
            dispatch(snack(false, ''));
        }
    }
}

Snack = connect(mapStateToProps, mapDispatchToProps)(Snack)

export default Snack