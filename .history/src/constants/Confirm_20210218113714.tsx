import React, { Component, Children } from 'react';
import { confirm } from '../actions';
import { Dialog, DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import { connect } from 'react-redux';

const Confirm = ({title, children, close, submit, confirm}) => {
    const handleClose = () => {
        close();
    }
    const handleSubmit = () =>{
        submit();
        handleClose();
    }

    return(
        <Dialog
            onClose={() => handleClose()} 
            open={confirm}
            aria-labelledby="confirm-dialog-title"
        >
            <DialogTitle
                id="confirm-dialog-title"
            >
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <button 
                    onClick={() => handleSubmit()} 
                    className="btn btn-primary"
                >
                    Yes
                </button>
                <button 
                    onClick={() => handleClose()} 
                    className="btn btn-secondary"
                >
                    No
                </button>
            </DialogActions>
        </Dialog>
    );
    
}

const mapStateToProps = state => ({
    confirm: state.confirm
});

const mapDispatchToProps = dispatch => {
    return {
        close: () => {
            dispatch(confirm(false));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)
