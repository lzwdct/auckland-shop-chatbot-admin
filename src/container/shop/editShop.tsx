import _ from 'lodash';
import React, { useState, useEffect, useRef, Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { fetchShopDetail, updateShopDetail, snack } from '../../actions';

import { browserHistory } from 'react-router';
import Snack from '../../constants/Snack';
import { useHistory } from 'react-router-dom';

const styles = {
    btn: {
        padding: '10px'
    }
};

const EditShop = (props) => {
    const [shopid, setShopid] = useState('');
    const [shop_name, setShopp_name] = useState('');
    const [shop_addr, setShop_addr] = useState('');
    const [shop_phone, setShop_phone] = useState('');
    const [shop_order, setShop_order] = useState('');
    const [snack_open, setSnack_open] = useState(false);
    const history = useHistory();

    const shopDetail = useSelector(state => state.shopDetail);
    
    const dispatch = useDispatch();

    const edit_shop_addr_REF = useRef(null);
    const edit_shop_phone_REF = useRef(null);
    const edit_shop_order_REF = useRef(null);

	useEffect(() => {
		dispatch(fetchShopDetail(props.match.params.id));
    },[])
    
    const edit_shop = (e) => {
        e.preventDefault();
        dispatch(updateShopDetail(props.match.params.id, edit_shop_addr_REF.current.value, edit_shop_phone_REF.current.value, edit_shop_order_REF.current.value));
        dispatch(snack(true, '정보가 업데이트 되었습니다.'))

        /** 
        this.props.updateShopDetail(
            this.props.match.params.id,
            this.edit_shop_addr.value,
            this.edit_shop_phone.value,
            this.edit_shop_order.value
        );*/
    }
    const back_shop = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <div>
            {
                !shopDetail && <div>Loading...</div>
            }
            {shopDetail &&
                <form>
                    <div className="form-group">
                        <label htmlFor="edit_shop_addr">Shop Address</label>
                        <input
                            type="text"
                            name="edit_shop_addr"
                            id="edit_shop_addr"
                            ref={edit_shop_addr_REF}
                            key="address"
                            defaultValue={shopDetail.shop_addr || ''}
                            placeholder="식당 주소"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="edit_shop_phone">Shop Phone Number</label>
                        <input
                            type="text"
                            name="edit_shop_phone"
                            id="edit_shop_phone"
                            key="phone"
                            ref={edit_shop_phone_REF}
                            defaultValue={shopDetail.shop_phone || ''}
                            placeholder="식당 연락처"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="edit_shop_order">Shop Order</label>
                        <input
                            type="text"
                            name="edit_shop_order"
                            id="edit_shop_order"
                            key="order"
                            ref={edit_shop_order_REF}
                            defaultValue={shopDetail.shop_order || 5}
                            className="form-control"
                            placeholder="순서"
                        />
                    </div>
                    <div>
                        <button
                            className="btn btn-primary"
                            style={styles.btn}
                            onClick={(e) => edit_shop(e)}
                        >
                            수정
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={(e) => back_shop(e)}
                            style={styles.btn}
                        >
                            메인
                        </button>
                    </div>
                    <Snack />
                </form>
            }
        </div>
    );
}

/*
class EditShop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shopid: '',
            shop_name: '',
            shop_addr: '',
            shop_phone: '',
            shop_order: '',
            snack_open: false
        };
    }
    componentDidMount() {

        this.props.fetchShopDetail(this.props.match.params.id);
    }
    edit_shop(e) {
        e.preventDefault();
        this.props.updateShopDetail(
            this.props.match.params.id,
            this.edit_shop_addr.value,
            this.edit_shop_phone.value,
            this.edit_shop_order.value
        );
    }
    back_shop(e) {
        e.preventDefault();
        this.props.history.push('/');
    }
    render() {
        const { shopDetail } = this.props;

        return (
            <div>
                {
                    !shopDetail && <div>Loading...</div>
                }
                {shopDetail &&
                    <form>
                        <div className="form-group">
                            <label htmlFor="edit_shop_addr">Shop Address</label>
                            <input
                                type="text"
                                name="edit_shop_addr"
                                id="edit_shop_addr"
                                ref={(input) => this.edit_shop_addr = input}
                                key="address"
                                defaultValue={shopDetail.shop_addr || ''}
                                placeholder="식당 주소"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="edit_shop_phone">Shop Phone Number</label>
                            <input
                                type="text"
                                name="edit_shop_phone"
                                id="edit_shop_phone"
                                key="phone"
                                ref={(input) => this.edit_shop_phone = input}
                                defaultValue={shopDetail.shop_phone || ''}
                                placeholder="식당 연락처"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="edit_shop_order">Shop Order</label>
                            <input
                                type="text"
                                name="edit_shop_order"
                                id="edit_shop_order"
                                key="order"
                                ref={(input) => this.edit_shop_order = input}
                                defaultValue={shopDetail.shop_order || 5}
                                className="form-control"
                                placeholder="순서"
                            />
                        </div>
                        <div>
                            <button
                                className="btn btn-primary"
                                style={styles.btn}
                                onClick={(e) => this.edit_shop(e)}
                            >
                                수정
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={(e) => this.back_shop(e)}
                                style={styles.btn}
                            >
                                메인
                            </button>
                        </div>
                        <Snack />
                    </form>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shopDetail: state.shopDetail
});

const mapDispatchToProps = dispatch => {
    return {
        fetchShopDetail: (id) => {
            dispatch(fetchShopDetail(id));
        },
        updateShopDetail: (id, addr, phone, order) => {
            dispatch(updateShopDetail(id, addr, phone, order));
            dispatch(snack(true, '정보가 업데이트 되었습니다.'))
        }
    }
}

EditShop = connect(mapStateToProps, mapDispatchToProps)(EditShop)
**/

export default EditShop