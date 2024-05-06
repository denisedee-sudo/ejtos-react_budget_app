import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        let newBudget = event.target.value;
        if (newBudget < 0) {
            alert("The value cannot be negative");
            return;
        } else {
            setNewBudget(newBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
