import _ from 'lodash';
import React, { useState, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchShops, deleteShop, confirm } from '../../actions';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import AddShop from './addShop';
import Confirm from '../../constants/Confirm';
import { useHistory } from 'react-router-dom';

const ShopList = (props) => {
    const [id, setID] = useState(0);
	const shopList = useSelector(state => state.shopList);
	const dispatch = useDispatch();
    const history = useHistory();

	useEffect(() => {
		if(shopList.length === 0)
        dispatch(fetchShops());
    },[])
    
    const delete_shop = (id) => {
		dispatch(confirm(true));
		setID(id)
	}
    const renderShop = (shopList) => {
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
                        submit={() => dispatch(deleteShop(id))}
                        title="Are you sure to delete?"
                    />
                </div>
                
            }
        </div>
    );
}

/** 
class ShopList extends Component {
    constructor(props) {
        super(props);

        this.state = {
			id : 0
		}
    }
    componentDidMount(){
        if(this.props.shopList.length === 0)
            this.props.getShopList();
    }
    delete_shop(id){
		this.props.open();
		this.setState({
			id
		});
	}
    renderShop(shopList){

        if(!shopList.length) return null;
		return _.map(shopList, shop => {
			return (
                <ListItem button key={shop.idshop} component="a" onClick={() => this.props.history.push('/menu/' + shop.idshop) } >
                    <ListItemText primary={shop.shop_name} />
                    <ListItemSecondaryAction>
                        <button
                            className="btn btn-primary"
                            onClick={() => this.props.history.push('/edit/'+shop.idshop) }
                        >
                            Edit
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => this.delete_shop(shop.idshop)}
                        >
                            Delete
                        </button>
                    </ListItemSecondaryAction>
                </ListItem>
			);
		});
	}
    render() {
        const { shopList } = this.props;

        return (
            <div>
                {
                    shopList.length === 0 && <div>Loading...</div>
                }
                {
                    shopList.length > 0 &&
                    <div>
                        <List>
                            {this.renderShop(shopList)}
                        </List>
                        <AddShop/>
                        <Confirm
                            submit={() => this.props.deleteShop(this.state.id)}
                            title="Are you sure to delete?"
                        />
                    </div>
                    
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shopList: state.shopList
});

const mapDispatchToProps = dispatch => {
    return {
        getShopList: () => {
            dispatch(fetchShops());
        },
        deleteShop: (id) => {
            dispatch(deleteShop(id))
        },
		open: () => {
			dispatch(confirm(true));
		}
    }
}

ShopList = withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopList))
*/
export default ShopList