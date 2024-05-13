import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    
    const handleCurrencyChange = (event) => {
        let newCurrency = event.target.value
        setNewCurrency(newCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }

    return (
    <div className='row'>
        <div className='input-group alert alert-info col'>
                    <label className="input-group-text" htmlFor="selectCurrency">Currency</label>
                    <select className="custom-select form-select" id="selectCurrency" onChange={handleCurrencyChange}>
                    <option defaultValue value="£" name="GBP">£ Pound</option>
                    <option value="$" name="USD">$ Dollar</option>
                    <option value="€" name="EUR">€ Euro</option>
                    <option value="¥" name="JPY">¥ Yen</option>
                    </select>
                
        </div>
    </div>
    );
};
export default Currency;