import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { fetchShops, deleteShop, confirm } from '../../actions';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import AddShop from './addShop';
import Confirm from '../../constants/Confirm';
import { withRouter } from "react-router";


class ShopList extends Component {
    constructor(props) {
        super(props);

        this.state = {
			id : 0
		}
    }
    UNSAFE_componentWillMount(){
        this.props.getShopList();
    }
    delete_shop(id){
		this.props.open();
		this.setState({
			id
		});
	}
    renderShop(){
        const { shopList } = this.props;
		if(!shopList.length) return null;
		return _.map(shopList, shop => {
			return (
                <ListItem button key={shop.idshop} component="a" href={'/menu/' + shop.idshop + '/' + shop.shop_name}>
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
                            {this.renderShop()}
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

export default ShopList