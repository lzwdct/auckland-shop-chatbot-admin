import _ from 'lodash';
import React, { useState, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMenus, deleteMenu, deleteShop, confirm } from '../../actions';

import AddMenu from './addMenu';
import Food from '../../component/Food';
import Confirm from '../../constants/Confirm';

import { Dialog, FlatButton, RaisedButton } from '@material-ui/core';
//import TitleMenu from '../top_menu/menus';
//import Add_Menu from './add_menu';


const styles = {
  wrapper: {
  	display: 'flex',
  	flexWrap: 'wrap'
  },
  btnLine: {
  	margin: '10px 0px 30px'
  },
  btnEdit: {
  	padding: '10px',
    border: '0',
    margin: '10px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#2fb',
    textDecorationLine: 'none'
  },
  btnDelete: {
  	padding: '10px',
    border: '0',
    margin: '10px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#f2b',
    textDecorationLine: 'none'
  }
};

const MenuList = (props) => {
	const [id, setID] = useState(0);
	const menu = useSelector(state => state.menu);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMenus(props.match.params.id));
	},[])

	const delete_menu = (id) => {
		dispatch(confirm(true))
		setID(id)
	}
	const renderPosts = () => {
		return _.map(menu, item => {
			return (
				<span
					key={item.idmenu}
				>
					<Food
						onDelete={() => delete_menu(item.idmenu)}
						label={item.menu_name}
					/>
				</span>
			);
		});
	}

	return(
		<div>
			{ menu.length > 0 && renderPosts()}
			<AddMenu shop_id={props.match.params.id} />
			<Confirm
				submit={() => dispatch(deleteMenu(id, props.match.params.id))}
				title="Are you sure to delete?"
			/>
		</div>
	);
}

export default MenuList;

/** 
class MenuList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id : 0
		}
	}
	UNSAFE_componentWillMount(){
		this.props.fetch_menus(this.props.match.params.id);
	}
	delete_menu(id){
		this.props.open();
		this.setState({
			id
		});
	}
	renderPosts(){
		const { menu } = this.props;

		return _.map(menu, item => {
			return (
				<span
					key={item.idmenu}
				>
					<Food
						onDelete={() => this.delete_menu(item.idmenu)}
						label={item.menu_name}
					/>
				</span>
			);
		});
	}
	render(){
		const { menu } = this.props;
		return(
			<div>
				{ menu.length > 0 && this.renderPosts()}
				<AddMenu shop_id={this.props.match.params.id} />
				<Confirm
					submit={() => this.props.deleteMenu(this.state.id, this.props.match.params.id)}
					title="Are you sure to delete?"
				/>
			</div>
		);
	};
}

const mapStateToProps = state => ({
    menu: state.menu
});

const mapDispatchToProps = dispatch => {
    return {
        fetch_menus: (id) => {
            dispatch(fetchMenus(id));
        },
        deleteMenu: (menuid, shopid) => {
            dispatch(deleteMenu(menuid, shopid));
        },
        deleteShop: () => {
            dispatch(deleteShop());
		},
		open: () => {
			dispatch(confirm(true));
		}
    }
}

MenuList = connect(mapStateToProps, mapDispatchToProps)(MenuList)

export default MenuList
*/