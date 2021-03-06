import React, { useState, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { userLogin } from '../actions';
const style = {
    paper: {
        padding: 20
    }
}

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const login = useSelector(state => state.login);
    const error = useSelector(state => state.error);

	const dispatch = useDispatch();

	useEffect(() => {
		const { success } = login;
        const { history } = props;
        if( success )
            history.push('/');
    })
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(userLogin(username, password));
    }
    const setValue = (type, newValue) => {
        if(type === 'username'){
            setUsername(newValue)
        }else{
            setPassword(newValue)
        }
    }

    return (
        <div>
            <Paper style={style.paper}>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            onChange={(event) => setValue('username', event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="password"
                            onChange={(event) => setValue('password', event.target.value)}
                        />
                    </div>
                    {
                        login.error === 1 && <div className="error">Invalid login detail</div> 
                    }
                    <button 
                        type="submit" 
                        className="btn btn-default"
                        onClick={(e) => handleClick(e)}
                    >
                        Submit
                    </button>
                </form>
            </Paper>
        </div>
    );
}

/**
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login: 0,
            error: 0
        }

        this.setValue = this.setValue.bind(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        const { success } = nextProps.login;
        const { history } = this.props;
        if( success )
            history.push('/');
    }
    handleClick(e){
        e.preventDefault();
        const { userLogin } = this.props; 
        const { username, password } = this.state;

        userLogin(username, password);
    }
    setValue(type, newValue){
        if(type === 'username'){
            this.setState({ username: newValue });
        }else{
            this.setState({ password: newValue });
        }
    }
    render() {
        const { error } = this.props.login;
        return (
            <div>
                <Paper style={style.paper}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Username"
                                onChange={(event) => this.setValue('username', event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="password"
                                onChange={(event) => this.setValue('password', event.target.value)}
                            />
                        </div>
                        {
                            error === 1 && <div className="error">Invalid login detail</div> 
                        }
                        <button 
                            type="submit" 
                            className="btn btn-default"
                            onClick={(e) => this.handleClick(e)}
                        >
                            Submit
                        </button>
                    </form>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login,
    error: state.error
});

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (username, password) => {
            dispatch(userLogin(username, password));
        }
    }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)
**/

export default Login