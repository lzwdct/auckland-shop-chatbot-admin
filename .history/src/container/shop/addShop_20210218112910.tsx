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
	addShop:(shop_name: string, shop_addr: string, shop_phone: string ) => void
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
			<button className="btn btn-primary" onClick={() => add_shop()}>
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
