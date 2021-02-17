import _ from 'lodash';
import React, { useState, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchMenus, deleteMenu, confirm } from '../../actions';

import AddMenu from './addMenu';
import Food from '../../component/Food';
import Confirm from '../../constants/Confirm';



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

interface PropsFromState {
	match: any,
	menu: any
}
  
interface propsFromDispatch {
	fetch_menus: (id: Number) => void,
	deleteMenu: (menuid: Number, shopid: Number) => void,
	open: () => void
}

type AllProps = PropsFromState & propsFromDispatch;

const MenuList : React.FunctionComponent<AllProps> = ({ match, menu, fetch_menus, deleteMenu, open }) => {
	const [id, setID] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		fetch_menus(match.params.id);
	},[])

	const delete_menu = (id) => {
		open()
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
			<AddMenu shop_id={match.params.id} />
			<Confirm
				submit={() => deleteMenu(id, match.params.id)}
				title="Are you sure to delete?"
			/>
		</div>
	);
}

const mapStateToProps = state => ({
    menu: state.menu
});
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        fetch_menus: (id) => {
            dispatch(fetchMenus(id));
        },
        deleteMenu: (menuid, shopid) => {
            dispatch(deleteMenu(menuid, shopid));
        },
		open: () => {
			dispatch(confirm(true));
		}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)

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