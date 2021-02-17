import _ from 'lodash';
import React, { useState, useEffect, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

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

interface PropsFromState {

}
  
interface propsFromDispatch {
	addShop:(shop_name: String, shop_addr: String, shop_phone: String ) => void
}

type AllProps = PropsFromState & propsFromDispatch;

const AddShop : React.FunctionComponent<AllProps> = ({ addShop }) => {
	const [shop_name, setShop_name] = useState('');
	const [shop_addr, setShop_addr] = useState('');
	const [shop_phone, setShop_phone] = useState('');

	const add_shop = () => {
		addShop(shop_name, shop_addr, shop_phone);

		setShop_name('');
		setShop_addr('');
		setShop_phone('');
	}
	const handleNameChange = (event) => {
		setShop_name(event.target.value);
	}
	const handleAddrChange = (event) => {
		setShop_addr(event.target.value);
	}
	const handlePhoneChange = (event) => {
		setShop_phone(event.target.value);
	}

	return (
		<div>
			<input 
				type="text" 
				name="add_shop_text" 
				value={shop_name} 
				onChange={handleNameChange} 
				style={styles.wrapper}
				placeholder="식당 이름"
			/>
			<input 
				type="text" 
				name="add_shop_addr" 
				value={shop_addr} 
				onChange={handleAddrChange} 
				style={styles.wrapper}
				placeholder="식당 주소"
			/>
			<input 
				type="text" 
				name="add_shop_phone" 
				value={shop_phone} 
				onChange={handlePhoneChange} 
				style={styles.wrapper}
				placeholder="식당 연락처"
			/>
			<button className="btn btn-primary" onClick={(e) => add_shop(e)}>
				ADD
			</button>
			<Snack />
		</div>
	);
}

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        addShop: (name, addr, phone) => {
            dispatch(addShop(name, addr, phone));
            dispatch(snack(true, '새로운 식당이 추가되었습니다.'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddShop)

/** 
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
*/