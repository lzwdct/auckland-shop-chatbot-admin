
import _ from 'lodash';
import React, { useState, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Snack from '../../constants/Snack';
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { addNewMenu, snack } from '../../actions';

const styles = {
  wrapper: {
  	height: '30px',
    margin: '20px 10px',
    borderRadius:4,
    border: '1px solid #ccc',
  }
};

interface PropsFromState {
	shop_id: number
  }
  
interface propsFromDispatch {
	add_menu: (shop_id: number, menu_name: string) => void
}

type AllProps = PropsFromState & propsFromDispatch;

const AddMenu : React.FunctionComponent<AllProps> = ({ shop_id, add_menu }) => {
	const [menu_name, setMenu_name] = useState('');

	const add_menus = (): void => {
		add_menu(shop_id, menu_name);
		setMenu_name('');
	}
	const handleNameChange = (event: { target: HTMLInputElement }) => {
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
						add_menus()
					}
				}}
				style={styles.wrapper}
			/>
			<button id="add_menu" className="btn btn-primary" onClick={() => add_menus()}>
				ADD
			</button>
			<Snack />
		</div>
	);
}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        add_menu: (id:number, name:string) => {
            dispatch(addNewMenu(id, name));
            dispatch(snack(true, '새로운 메뉴가 추가되었습니다.'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMenu)

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


export default AddMenu
 */