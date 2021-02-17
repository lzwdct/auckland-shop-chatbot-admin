import _ from 'lodash';
import React, { useState, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchMenus, deleteMenu, confirm } from '../../actions';

import AddMenu from './addMenu';
import Food from '../../component/Food';
import Confirm from '../../constants/Confirm';

interface PropsFromState {
	match: any,
	menu: any
}
  
interface propsFromDispatch {
	fetch_menus: (id: number) => void,
	deleteMenu: (menuid: number, shopid: number) => void,
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
