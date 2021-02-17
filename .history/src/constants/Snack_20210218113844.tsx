import React, { Component, Children } from 'react';
import { snack } from '../actions';
import { Snackbar } from '@material-ui/core';
import { connect } from 'react-redux';

const Snack = ({snack, message}) => {
    return(
        <Snackbar
            open={snack}
            message={message}
        />
    );
    
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

export default connect(mapStateToProps, mapDispatchToProps)(Snack)
