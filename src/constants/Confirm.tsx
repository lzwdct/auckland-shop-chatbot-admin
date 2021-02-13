import React, { Component, Children } from 'react';
import { confirm } from '../actions';
import { Dialog, DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import { connect } from 'react-redux';

class Confirm extends Component{
    handleClose(){
        this.props.close();
    }
    handleSubmit(){
        this.props.submit();
        this.handleClose();
    }
    render(){
        return(
            <Dialog
                onClose={() => this.handleClose()} 
                open={this.props.confirm}
                aria-labelledby="confirm-dialog-title"
            >
                <DialogTitle
                    id="confirm-dialog-title"
                >
                    {this.props.title}
                </DialogTitle>
                <DialogContent>
                    {this.props.children}
                </DialogContent>
                <DialogActions>
                    <button 
                        onClick={() => this.handleSubmit()} 
                        className="btn btn-primary"
                    >
                        Yes
                    </button>
                    <button 
                        onClick={() => this.handleClose()} 
                        className="btn btn-secondary"
                    >
                        No
                    </button>
                </DialogActions>
            </Dialog>
        );
    }
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

Confirm = connect(mapStateToProps, mapDispatchToProps)(Confirm)

export default Confirm