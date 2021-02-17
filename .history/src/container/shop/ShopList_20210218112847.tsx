import _ from 'lodash';
import React, { useState, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchShops, deleteShop, confirm } from '../../actions';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import AddShop from './addShop';
import Confirm from '../../constants/Confirm';
import { useHistory } from 'react-router-dom';


interface PropsFromState {
    shopList : []
}
  
interface propsFromDispatch {
    getShopList:() => void,
    open:() => void,
    deleteShop:(id:number) => void
}

type AllProps = PropsFromState & propsFromDispatch;

const ShopList : React.FunctionComponent<AllProps> = ({ shopList, getShopList, open, deleteShop }) => {
    const [id, setID] = useState(0);
	//const shopList = useSelector(state => state.shopList);
	//const dispatch = useDispatch();
    const history = useHistory();

	useEffect(() => {
		if(shopList.length === 0)
        getShopList();
    },[])
    
    const delete_shop = (id: number) => {
		open();
		setID(id)
	}
    const renderShop = (shopList: []) => {
        if(!shopList.length) return null;
		return _.map(shopList, shop => {
			return (
                <ListItem button key={shop.idshop} component="a" onClick={() => history.push('/menu/' + shop.idshop) } >
                    <ListItemText primary={shop.shop_name} />
                    <ListItemSecondaryAction>
                        <button
                            className="btn btn-primary"
                            onClick={() => history.push('/edit/'+shop.idshop) }
                        >
                            Edit
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => delete_shop(shop.idshop)}
                        >
                            Delete
                        </button>
                    </ListItemSecondaryAction>
                </ListItem>
			);
		});
    }
    
    return (
        <div>
            {
                shopList.length === 0 && <div>Loading...</div>
            }
            {
                shopList.length > 0 &&
                <div>
                    <List>
                        {renderShop(shopList)}
                    </List>
                    <AddShop/>
                    <Confirm
                        submit={() => deleteShop(id)}
                        title="Are you sure to delete?"
                    />
                </div>
                
            }
        </div>
    );
}
const mapStateToProps = state => ({
    shopList: state.shopList
});
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        getShopList: () => {
            dispatch(fetchShops());
        },
        deleteShop: (id:number) => {
            dispatch(deleteShop(id))
        },
		open: () => {
			dispatch(confirm(true));
		}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList)
