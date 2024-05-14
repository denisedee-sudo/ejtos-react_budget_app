import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td className='expense-item'>{props.name}</td>
            <td className='expense-item'>{currency}{props.cost}</td>
            <td className='expense-item'>
                {/* <button onClick={event=> decreaseAllocation(props.name)}>-</button> */}
                <FaMinusCircle className='h3 text-hover text-danger' onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle>
            </td>
            <td className='expense-item'>
                {/* <button onClick={event=> increaseAllocation(props.name)}>+</button> */}
            <FaPlusCircle className='h3 text-hover text-success' onClick={event=> increaseAllocation(props.name)}></FaPlusCircle>
            </td>
            <td className='expense-item'><TiDelete className='text-hover' size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;