
import _ from 'lodash';
import React, { useState, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Snack from '../../constants/Snack';

import { addNewMenu, snack } from '../../actions';

const styles = {
  wrapper: {
  	height: '30px',
    margin: '20px 10px',
    borderRadius:4,
    border: '1px solid #ccc',
  }
};

const AddMenu = (props) => {
	const [menu_name, setMenu_name] = useState('');
	
	const menu = useSelector(state => state.menu);
	const dispatch = useDispatch();

	const add_menus = () => {
		dispatch(addNewMenu(props.shop_id, menu_name));
		dispatch(snack(true, '새로운 메뉴가 추가되었습니다.'))
		setMenu_name('');
	}
	const handleNameChange = (event) => {
        event.preventDefault();
		setMenu_name(event.target.value)
	}

	return (
		<div>
			<input 
				type="text" 
				id="add_menu_text" 
				value={menu_name} 
				onChange={(e) => handleNameChange(e)} 
				onKeyPress={event => {
					if (event.key === 'Enter') {
						add_menus(event)
					}
				}}
				style={styles.wrapper}
			/>
			<button label="ADD" className="btn btn-primary" onClick={(e) => add_menus(e)}>
				ADD
			</button>
			<Snack />
		</div>
	);
}

/**
class AddMenu extends Component{
	constructor(props) {
		super(props);
		this.state = {
			menu_name: ''
		};
	}
	add_menus(){
		this.props.add_menus(this.props.shop_id, this.state.menu_name);
		this.setState({
			menu_name: '',
		});
	}
	handleNameChange(event){
        event.preventDefault();
		this.setState({ menu_name: event.target.value });
	};
	render(){
		return (
			<div>
				<input 
					type="text" 
					id="add_menu_text" 
					value={this.state.menu_name} 
					onChange={(e) => this.handleNameChange(e)} 
					onKeyPress={event => {
						if (event.key === 'Enter') {
							this.add_menus(event)
						}
					}}
					style={styles.wrapper}
				/>
				<button label="ADD" className="btn btn-primary" onClick={(e) => this.add_menus(e)}>
                    ADD
                </button>
                <Snack />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
    return {
        add_menus: (id, name) => {
            dispatch(addNewMenu(id, name));
            dispatch(snack(true, '새로운 메뉴가 추가되었습니다.'))
        }
    }
}

AddMenu = connect(null, mapDispatchToProps)(AddMenu)
 */

export default AddMenu
