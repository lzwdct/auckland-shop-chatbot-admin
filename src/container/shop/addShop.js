import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addShop, snack } from '../../actions';
import Snack from '../../constants/Snack';

const styles = {
  wrapper: {
  	height: '30px',
    margin: '20px 10px',
    borderRadius:4,
    border: '1px solid #ccc',
  }
};

class AddShop extends Component{
	constructor(props) {
		super(props);
		this.state = {
			shop_name: '',
			shop_addr: '',
            shop_phone: ''
        };
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAddrChange = this.handleAddrChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.add_shop = this.add_shop.bind(this);
	}
	add_shop(){
		this.props.addShop(this.state.shop_name, this.state.shop_addr, this.state.shop_phone);

		this.setState({
			shop_name: '',
			shop_addr: '',
			shop_phone: '',
		});
	}
	handleNameChange(event){
		this.setState({ shop_name: event.target.value });
	}
	handleAddrChange(event){
		this.setState({ shop_addr: event.target.value });
	}
	handlePhoneChange(event){
		this.setState({ shop_phone: event.target.value });
	}
	render(){
		return (
			<div>
				<input 
					type="text" 
					name="add_shop_text" 
					value={this.state.shop_name} 
					onChange={this.handleNameChange} 
					style={styles.wrapper}
					placeholder="식당 이름"
				/>
				<input 
					type="text" 
					name="add_shop_addr" 
					value={this.state.shop_addr} 
					onChange={this.handleAddrChange} 
					style={styles.wrapper}
					placeholder="식당 주소"
				/>
				<input 
					type="text" 
					name="add_shop_phone" 
					value={this.state.shop_phone} 
					onChange={this.handlePhoneChange} 
					style={styles.wrapper}
					placeholder="식당 연락처"
				/>
                <button label="ADD" className="btn btn-primary" onClick={(e) => this.add_shop(e)}>
                    ADD
                </button>
				<Snack />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
    return {
        addShop: (name, addr, phone) => {
            dispatch(addShop(name, addr, phone));
            dispatch(snack(true, '새로운 식당이 추가되었습니다.'))
        }
    }
}

AddShop = connect(null, mapDispatchToProps)(AddShop)

export default AddShop