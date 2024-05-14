import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        let newBudget = event.target.value;
        if (newBudget < 0) {
            alert("The value cannot be negative");
            return;
        } else if (newBudget > 20000) {
            alert(`The value cannot exceed ${currency}20,000`);
            return;
        } 
        else if (newBudget < totalExpenses) {
            alert("You cannot reduce budget value lower than spending amount");
            return;
        }
        else {
            setNewBudget(newBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<div className='d-flex flex-row'>
    <div className='m-1'>{currency}</div><input className='col-11' type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
</div>
    );
};
export default Budget;
